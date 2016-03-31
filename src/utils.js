import url from 'url';
import React from 'react';

class Utils {
  nopElement = <span />;

  uuid() {
    var s4 = () => Math.floor((1 + Math.random()) * 0x10000)
      .toString(16).substring(1);

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  translateProviderIdToName(providerId) {
    var providerNames = {
      github: 'GitHub',
      linkedin: 'LinkedIn'
    };

    var newName = providerNames[providerId];

    if (!newName) {
      newName = providerId[0].toUpperCase() + providerId.slice(1);
    }

    return newName;
  }

  encodeQueryString(query) {
    var result = '';

    for (var key in query) {
      if (result !== '') {
        result += '&';
      }
      result += key + '=' + encodeURIComponent(query[key]);
    }

    return result;
  }

  deepForEach(node, handler) {
    handler(node);
    if (node.props.children) {
      this.forEachChild(node.props.children, handler, node);
    }
  }

  forEachChild(children, handler, parent) {
    React.Children.forEach(children, (child) => {
      handler(child, parent);

      if (child.props && child.props.children) {
        this.forEachChild(child.props.children, handler, child);
      }
    });
  }

  buildElementTree(element, optionsFactory, elementFactory, parent) {
    var newChildren = undefined;

    var newElement = elementFactory && elementFactory(element, parent) || element;
    var newOptions = optionsFactory && optionsFactory(element, parent) || {};

    if (newElement !== this.nopElement && newElement.props && newElement.props.children) {
      newChildren = React.Children.map(
        newElement.props.children,
        (childElement) => {
          if (!React.isValidElement(childElement)) {
            return elementFactory(childElement, parent);
          }
          return this.buildElementTree(childElement, optionsFactory, elementFactory, newElement);
        }
      );
    }

    return React.cloneElement(newElement, newOptions, newChildren);
  }

  getFormFieldMap(root, handler) {
    var fields = {};

    var tryMapField = (field, name, defaultValue) => {
      if (field.props.ignore) {
        return;
      }

      if (field.props.fieldName) {
        name = elements.props.fieldName;
      }

      if (!('name' in fields)) {
        fields[name] = {
          element: field,
          defaultValue: defaultValue
        };
      }
    };

    this.forEachChild(root, (child) => {
      if (!child.props) {
        return;
      }

      handler(child, tryMapField.bind(null, child));
    });

    var inverseMap = {};
    var defaultValues = {};

    for (var key in fields) {
      var field = fields[key];
      var element = field.element;

      if (!(element.type in inverseMap)) {
        inverseMap[element.type] = {};
      }

      defaultValues[key] = field.defaultValue !== undefined ?
        field.defaultValue : (element.props.value || '');

      inverseMap[element.type][element.props.name] = {
        fieldName: key,
        field: element
      };
    }

    return {
      defaultValues: defaultValues,
      inverse: inverseMap
    };
  }

  makeForm(source, fieldMapFn, spIfFn, spBindFn) {
    var root = React.cloneElement(<div />, {}, source.props.children);

    var fieldMap = this.getFormFieldMap(root, fieldMapFn);

    source.state.fields = source.state.fields || {};
    for (var key in fieldMap.defaultValues) {
      if (!(key in source.state.fields)) {
        source.state.fields[key] = fieldMap.defaultValues[key];
      }
    }

    var elementFactory = (element, parent) => {
      if (element.props) {
        var spIf = element.props.spIf;

        if (spIf) {
          var test = null;
          var inverted = false;

          if (spIf[0] === '!') {
            inverted = true;
            spIf = spIf.substr(1);
          }

          test = spIfFn(spIf, element);

          if (test !== null) {
            if (inverted) {
              test = !test;
            }

            if (!test) {
              return this.nopElement;
            }
          }
        }

        var spBind = element.props.spBind;

        if (spBind) {
          var newElement = spBindFn(spBind, element);
          if (newElement !== false || newElement) {
            element = newElement;
          }
        }
      }
      return element;
    };

    var optionsFactory = (element, parent) => {
      var options = {};

      if (element.props) {
        var elementType = element.type;
        var elementAttributeName = element.props.name;

        if (elementType in fieldMap.inverse && elementAttributeName in fieldMap.inverse[elementType]) {
          var mappedField = fieldMap.inverse[elementType][elementAttributeName];

          if (elementAttributeName in fieldMap.defaultValues) {
            options.defaultValue = fieldMap.defaultValues[elementAttributeName];
          }

          var originalOnChange = element.props.onChange;
          options.onChange = (e, ...args) => {
            options.disabled = source.state.isFormProcessing;
            source.state.fields[mappedField.fieldName] = e.target.value;

            // Honor the original onChange event.
            if (originalOnChange) {
              originalOnChange(e, ...args);
            }
          };
        }

        var elementAttributeType = element.props.type;

        if ((elementType === 'input' || elementType === 'button') && elementAttributeType === 'submit') {
          options.disabled = source.state.isFormProcessing;
        }
      }

      return options;
    };

    return this.buildElementTree(root, optionsFactory, elementFactory);
  }

  clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  mergeObjects(obj1, obj2) {
    var obj3 = {};

    if (obj1) {
      for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
    }

    if (obj2) {
      for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
    }

    return obj3;
  }

  isRelativeUri(uri) {
    return uri && uri[0] === '/';
  }

  isSameHost(a, b) {
    var urlA = url.parse(a);

    if (!urlA) {
      return false;
    }

    var urlB = url.parse(b);

    if (!urlB) {
      return false;
    }

    return urlA.host === urlB.host;
  }

  logWarning(group, message) {
    if (message === undefined) {
      message = group;
      group = undefined;
    }

    var result = '[Stormpath SDK]';

    if (group) {
      result += ' ' + group;
    }

    result += ': ' + message;

    console.warn(result);
  }

  getEnabledGroups(groups) {
    var enabledGroups = {};

    if (groups && groups.items) {
      groups.items.forEach((item) => {
        if (item.status === 'ENABLED') {
          var name = item.name;

          if (name.indexOf(' ') !== -1) {
            name = name.replace(/ /g, '_');
          }

          enabledGroups[name] = true;
        }
      });
    }

    return enabledGroups;
  }

  makePredicateFunction(statement) {
    return new Function(`
      var scope = arguments[0];

      var maskingScope = {};

      for (var key in window) {
        maskingScope[key] = undefined;
      }

      for (var key in scope) {
        maskingScope[key] = scope[key];
      }

      with (maskingScope) {
        return (${statement});
      }
    `);
  }

  groupsMatchExpression(groups, expression) {
    if (!groups) {
      return false;
    }

    var scope = JSON.parse(JSON.stringify(groups));
    var expressionFn = this.makePredicateFunction(expression);

    expression.match(/(\w+)/gmi).forEach((wordMatch) => {
      if (!(wordMatch in scope)) {
        scope[wordMatch] = false;
      }
    });

    return expressionFn(scope);
  }

  isArray(object) {
    var nativeIsArray = Array.isArray;
    var toString = Object.prototype.toString;
    return nativeIsArray(object) || toString.call(object) === '[object Array]';
  }

  enforceRootElement(object) {
    if (typeof object === 'string' || this.isArray(object)) {
      object = <span>{ object }</span>;
    }
    return object;
  }
}

export default new Utils()

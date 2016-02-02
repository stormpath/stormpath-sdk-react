import React from 'react';

class Utils {
  nopElement = <span />;

  forEachChild(children, handler) {
    React.Children.forEach(children, (child) => {
      handler(child);

      if (child.props && child.props.children) {
        this.forEachChild(child.props.children, handler);
      }
    });
  }

  buildElementTree(element, optionsFactory, elementFactory, parent) {
    var newChildren = undefined;

    var newElement = elementFactory && elementFactory(element, parent) || element;
    var newOptions = optionsFactory && optionsFactory(element, parent) || {};

    if (newElement !== this.nopElement && newElement.props && newElement.props.children ) {
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

    var tryMapField = (field, name) => {
      if (field.props.ignore) {
        return;
      }

      if (field.props.fieldName) {
        name = elements.props.fieldName;
      }

      if (!('name' in fields)) {
        fields[name] = field;
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

      if (!(field.type in inverseMap)) {
        inverseMap[field.type] = {};
      }

      var defaultValue = field.props.value || '';
      defaultValues[key] = defaultValue;

      inverseMap[field.type][field.props.name] = {
        fieldName: key,
        field: field
      };
    }

    return {
      defaultValues: defaultValues,
      inverse: inverseMap
    };
  }

  makeForm(source, fieldMapFn, spIf, spBindFn) {
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

          test = spIf(spIf, element);

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
          if (newElement !== false) {
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
          options.onChange = (e) => {
            disabled: source.state.isFormProcessing
            source.state.fields[mappedField.fieldName] = e.target.value;
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
}

export default new Utils()

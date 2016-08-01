# Stormpath React SDK

[![Bower Version](https://img.shields.io/bower/v/react-stormpath.svg?style=flat)](https://bower.io)
[![Build Status](https://img.shields.io/travis/stormpath/stormpath-sdk-react.svg?style=flat)](https://travis-ci.org/stormpath/stormpath-sdk-react)

This module provides routes and components for React that will allow you to solve common user management tasks using [Stormpath](https://stormpath.com/), such as *login* and *signup*.

*Stormpath is a User Management API that reduces development time with instant-on, scalable user infrastructure. Stormpath's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.*

* [Getting Started](#getting-started)
* [Documentation](#documentation)
* [Example](#example)
* [Help](#help)
* [Contributing](#contributing)
* [License](#license)

## Getting Started

Follow these steps to add Stormpath user authentication to your React app.

*Don't have an app? Use our [example app][] as a boilerplate - it has
Stormpath already integrated!*

1. **Configure Stormpath**

  In your application directory, create a file named `stormpath.yml` with the contents below:

  ```yaml
  client:
    apiKey:
      id: YOUR_API_KEY_ID
      secret: YOUR_API_KEY_SECRET
    application:
      href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

2. **Install React Router**

  The Stormpath module is only compatible with [React Router][], so ensure that your application is using it.
  
3. **Integrate Your Back-End**

  This module requires Stormpath on your back-end to work properly. At the moment we
  have a fully-featured integration for **Express.js**, [express-stormpath][].

  For a **quick setup**, use our [Stormpath SPA Development Server][].

4. **Install the SDK**

  Download and include [stormpath-sdk-react.min.js][] in your *index.html* file.
  
  ```html
  <script src="stormpath-sdk-react.min.js"></script>
  ```

  Or install with bower:
  
  ```term
  $ bower install react-stormpath --save
  ```
  
  Or install with npm:
  
  ```term
  $ npm install react-stormpath --save
  ```
  
  Then depending on how you load the library, access it as shown below:

  ```javascript
  // Using an ES6 transpiler, like Babel.
  import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';

  // Or not using an ES6 transpiler.
  var ReactStormpath = require('react-stormpath').default;
  var Router = require('react-stormpath').Router;
  var AuthenticatedRoute = require('react-stormpath').AuthenticatedRoute;
  var LoginLink = require('react-stormpath').LoginLink;
  
  // Or if you are using it from a browser without UMD.
  var Router = ReactStormpath.Router;
  var AuthenticatedRoute = ReactStormpath.AuthenticatedRoute;
  var LoginLink = ReactStormpath.LoginLink;
  ```

5. **Initialize the SDK**

  Before calling `React.render()` be sure to call [`ReactStormpath.init()`][].  This sets up the SDK so that it's ready to be used.
  
  ```javascript
  ReactStormpath.init({
    // See the API docs for available configuration options.
  });
  ```

6. **Configure the Router**

  In the file where you setup your [React Router][] routes, change your [`ReactRouter.Router`][] to [`ReactStormpath.Router`][] as shown below:
  
  ```html
  import { Router } from 'react-stormpath';
  import { Route, browserHistory } from 'react-router';
  
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={MainPage} />
    </Router>,
    document.getElementById('app-container')
  );
  ```

7. **Setup your Routes**

  Start by adding a route that people can go to in order to sign up. This will just be a regular [`ReactRouter.Route`][]. Then once you've done this, create a view for your route called `RegistrationPage` and add the [`RegistrationForm`][] component to it. This will render a registration form and allow people to sign up.
  
  ```html
  <Route path='/register' component={RegistrationPage} />
  ```

  Now when we have our registration done, let's add a [`LoginRoute`][] so that our users can log in. This route is special, since it tells the router where to go when you access a [`AuthenticatedRoute`][] without being authenticated. Once you've added the route, create a view for your route called `LoginPage` and add the [`LoginForm`][] component to it. The [`LoginForm`][] component will render a username and password login form so that your users can log in.
  
  ```html
  <LoginRoute path='/login' component={LoginPage} />
  ```

  Then on all routes that you want to protect, use [`AuthenticatedRoute`][].

  ```html
  <AuthenticatedRoute path='/protected' component={ProtectedPage} />
  ```

  Now we have most of our routes setup, let's add the route to redirect to when we've logged out.

  ```html
  <HomeRoute path='/' component={HomePage} />
  ```

  Add an additional `HomeRoute` and wrap it inside an `AuthenticatedRoute` to specify the route to redirect to when signing up or logging in. If this is left out then the first unauthenticated `HomeRoute` is used.

  ```html
  <AuthenticatedRoute>
    <HomeRoute path='/profile' component={ProfilePage} />
  </AuthenticatedRoute>
  ```

8. **Add Login and Logout Links**

  Use the [`LoginLink`][] component to create a link that will navigate your users to the [`LoginRoute`][] route:

  ```html
  <LoginLink>Login</LoginLink>
  ```
  
  Use the [`LogoutLink`][] component to end the session and navigate to your specified [`HomeRoute`][].

  ```html
  <LogoutLink>Logout</LogoutLink>
  ```

9. **Show Elements When Logged In**

  Use the [`Authenticated`][] component:

  ```html
  <Authenticated>
    <LogoutLink>Logout</LogoutLink>
  </Authenticated>
  ```

10. **Hide Elements When Logged Out**

  Use the [`NotAuthenticated`][] component:

  ```html
  <NotAuthenticated>
    <LoginLink>Login</LoginLink>
  </NotAuthenticated>
  ```
  
11. **User State in Components**

  Access user state in your components by requesting the [authenticated][] and [user][] context types:

  ```javascript
  class ContextExample extends React.Component {
    static contextTypes = {
      authenticated: React.PropTypes.bool,
      user: React.PropTypes.object
    };

    render() {
      if (!this.context.authenticated) {
        return (
          <div>
            You need to <LoginLink />.
          </div>
        );
      }

      return (
        <div>
          Welcome {this.context.user.username}!
        </div>
      );
    }
  }
```

12. **That's It!**

  You just added user authentication to your app with Stormpath. See the [API Documentation][] for further information on how Stormpath can be used with your React app.

## Documentation

For all available routes and components, see the [API Documentation][].

## Example

See the [example app][].

## Browserify

This module can be used with Browserify.  Please add the following lines to your
`package.json` file:

```json
"browser": {
  "stormpath": "./node_modules/react-stormpath/dist/stormpath-sdk-react.min.js"
}
```

## Help

If you have an issue while integrating this library, please make sure to look
at the open issues on this repository.

You may also contact us via email at support@stormpath.com or visit our [support center][].

## Contributing

Found something you want to change? Please see the [Contribution Guide](CONTRIBUTING.md),
we love your input!

## License

Apache 2.0, see [LICENSE](LICENSE).

[authenticated]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#authenticated-bool
[user]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#user-object
[`Authenticated`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#authenticated
[`AuthenticatedRoute`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#authenticatedroute
[`LoginForm`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#loginform
[`LoginLink`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#loginlink
[`LoginRoute`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#loginroute
[`LogoutLink`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#logoutlink
[`HomeRoute`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#homeroute
[`NotAuthenticated`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#notauthenticated
[`ReactRouter.Route`]: https://github.com/rackt/react-router/blob/master/docs/API.md#route
[`ReactRouter.Router`]: https://github.com/rackt/react-router/blob/master/docs/API.md#router
[`ReactStormpath.init()`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#initialization
[`ReactStormpath.Router`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#router
[`RegistrationForm`]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#registrationform
[API Documentation]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md
[example app]: https://github.com/stormpath/stormpath-express-react-example
[express-stormpath]: https://github.com/stormpath/express-stormpath
[React Router]: https://github.com/rackt/react-router
[Stormpath SPA Development Server]: https://github.com/stormpath/stormpath-spa-dev-server
[stormpath-sdk-react.min.js]: https://raw.githubusercontent.com/stormpath/stormpath-sdk-react/master/dist/stormpath-sdk-react.min.js
[support center]: https://support.stormpath.com

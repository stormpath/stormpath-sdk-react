# Stormpath is Joining Okta

We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit the [Migration FAQ][] for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).

Please see the primary [README.md](README.md) for more information.

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

1. **Install React Router**

  The Stormpath module is only compatible with [React Router][], so ensure that your application is using it.


2. **Install the SDK**

  If you are using Bower or NPM, you can install this module with the respective command:

  ```term
  npm install react-stormpath --save
  ```

  ```term
  bower install react-stormpath --save
  ```

  If you are not using a package manager, you can download the latest source from our Github CDN by using this link:

  * [stormpath-sdk-react.min.js][]

  Then include the script in your *index.html* file:

  ```html
  <script src="stormpath-sdk-react.min.js"></script>
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

3. **Initialize the SDK**

  The React SDK leverages the [Stormpath Client API][] for its authentication needs. Login to your Stormpath Tenant, and find your Client API domain (inside your application's policy section).  Add your Client API domain as the `endpoints.baseUri` setting when initializing `ReactStormpath`:

  ```javascript
  ReactStormpath.init({
    endpoints: {
      baseUri: 'https://{{clientApiDomainName}}'
    }
  });
  ```

  You will need to tell Stormpath where your front-end application is running, by adding its domain to the list of Authorized Origin URIs on your Stormpath Application. This can be done from the Stormpath Admin Console. For example, if you are developing on a local sever that runs your front-end app at `http://localhost:3000`, you need to add that URI to the list

  If this is not done, you will see the error `Origin 'http://localhost:3000' is therefore not allowed access.` in the browser error log.

  If you will be using social login, you will also need to add this URI to the list of Authorized Callback URIs, otherwise you will see the error `Specified redirect_uri is not in the application's configured authorized callback uri's.` when you attempt social login.

4. **Configure the Router**

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

5. **Setup your Routes**

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

6. **Add Login and Logout Links**

  Use the [`LoginLink`][] component to create a link that will navigate your users to the [`LoginRoute`][] route:

  ```html
  <LoginLink>Login</LoginLink>
  ```

  Use the [`LogoutLink`][] component to end the session and navigate to your specified [`HomeRoute`][].

  ```html
  <LogoutLink>Logout</LogoutLink>
  ```

7. **Show Elements When Logged In**

  Use the [`Authenticated`][] component:

  ```html
  <Authenticated>
    <LogoutLink>Logout</LogoutLink>
  </Authenticated>
  ```

8. **Hide Elements When Logged Out**

  Use the [`NotAuthenticated`][] component:

  ```html
  <NotAuthenticated>
    <LoginLink>Login</LoginLink>
  </NotAuthenticated>
  ```

9. **User State in Components**

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

10. **That's It!**

  You just added user authentication to your React app with Stormpath, you should now be able to register and login! See the [API Documentation][] for further information on how Stormpath can be used with your React app.  Once you have been able to successfully log in, the next section will discuss integrating with your own server.

11. **Making Authenticated Requests**

  Once you are able to successfully authenticate (log in) from your application, you will want to authorize access to API endpoints on your server.  The React SDK provides methods for getting the current authenticated access token, and using it to authenticate requests.

  Imagine you have an API on your server, such as `http://localhost:3000/api/subscription`, and you want to authorize requests to this endpoint and know who the user is.

  If you want to manually construct a request, using the `fetch` library, you can use our access token getter to add the access token to the request:

  ```javascript
  ReactStormpath.getAccessToken()
    .then((accessToken) => {
      fetch('http://localhost:3000/api/subscription', {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      });
    }).catch(() => {
      // Could not get access token, user is not logged in
    });
  ```

12. **Authorizing Requests Server-Side**

  Once your app has made the request with the access token, your server will need to read the token and make an authorization decision.  We provide SDKs for your backend server that make this easy.  Please follow one of the following links for a language-specific or framework-specific guide:

  **Java**

  Spring Boot developers should make use of our Spring Boot plugin, and see the [Token Management Documentation](https://docs.stormpath.com/java/spring-boot-web/tutorial.html#token-management).

  **.NET**

  ASP.NET developers can leverage our [ASP.NET](https://docs.stormpath.com/dotnet/aspnet/latest/) and [ASP.NET Core](https://docs.stormpath.com/dotnet/aspnetcore/latest/) libraries to achieve authorization in their applications, please see the Authorization section of each guide.

  **Node.js**

  Express developers can use our [Express-Stormpath](https://docs.stormpath.com/nodejs/express/latest/) library to easily authenticate requests with access tokens and make authorization decisions, please see the [Token Authentication](https://docs.stormpath.com/nodejs/express/latest/authentication.html#token-authentication) documentation.

  Node applications can generically use the [Stormpath Node SDK](https://docs.stormpath.com/nodejs/jsdoc/) to validate tokens, using the [JwtAuthenticator](https://docs.stormpath.com/nodejs/jsdoc/JwtAuthenticator.html).

  **PHP**

  Laravel developers can use our <a href="https://docs.stormpath.com/php/laravel/latest/index.html">Stormpath-Laravel</a> or [Stormpath-Lumen](https://docs.stormpath.com/php/lumen/latest/index.html) libraries and their respective `stormpath.auth` middleware to authenticate requests, please see the User Data section of the documentation for each library.

  **Other**

  Don't see your environment listed?  Not a problem!  Our access tokens are simple JWTs, that can be validated with most generic JWT validation libraries.  Our product guide can walk you through the process, [Validating an Access Token](https://docs.stormpath.com/rest/product-guide/latest/auth_n.html#validating-an-access-token").

  Need more assistance? Feel free to contact our support channel, details are below.

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
[Stormpath Client API]: https://docs.stormpath.com/client-api/product-guide/latest/index.html
[Migration FAQ]: https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement

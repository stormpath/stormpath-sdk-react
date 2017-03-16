API Documentation
-----------------

## Initialization

Before calling `React.render()` be sure to initialize/configure the SDK.

```javascript
ReactStormpath.init();
```

If you want to configure it, simply pass an object with the configuration you want to use.

```javascript
ReactStormpath.init({
  // Optional: Set if you want to use your own dispatcher or configure one such as 'redux'.
  // When no dispatcher is set, the default is 'flux'.
  dispatcher: {
    // Optional: Can either be 'flux' or 'redux'. Defaults to 'flux'.
    type: 'flux',

    // Required when you use type 'redux'.
    // The store that you wish to dispatch events to.
    store: yourReduxStore
  },

  // Optional: If your are running our framework integration
  // (e.g. express-stormpath) on a different domain, or you have
  // changed the default endpoints in the framework integration.
  // Values shown are the defaults.
  endpoints: {
    baseUri: null, // E.g. https://api.example.com
    me: '/me',
    login: '/login',
    register: '/register',
    verifyEmail: '/verify',
    forgotPassword: '/forgot',
    changePassword: '/change',
    logout: '/logout'
  }
});
```

## Authorization

Once the user is logged in, you can make authenticated requests to back-end APIs by getting the access token and attaching it to your request:

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


## Routing

#### Router

Router that extends `ReactRouter` with Stormpath routing functionality.

```html
<Router history={history}>
  <Route path='/' component={App}>
    <IndexRoute component={IndexPage} />
  </Route>
</Router>
```

#### HomeRoute

Route to redirect to when logging out.

```html
<HomeRoute path='/' component={MainPage} />
```

Wrap the `HomeRoute` in an `AuthenticatedRoute` to specify the route you want to redirect to when you register or login.

```html
<AuthenticatedRoute>
  <HomeRoute path='/profile' component={ProfilePage} />
</AuthenticatedRoute>
```

#### AuthenticatedRoute

Route that when used, requires that a session is established before continuing. Else redirects the user to the `LoginRoute` path.

```html
<AuthenticatedRoute path='/profile' component={ProfilePage} />
```

Specify the option `inGroup` to only allow users in a certain group to access the path.

```html
<AuthenticatedRoute path='/admin' inGroup="administrator" component={AdminPage} />
```

If you want to specify more complex groups, please see section [Group Expressions](#group-expressions).

**Important:** In order to use the `inGroup` option, you must expand the `groups` resource for the `/me` endpoint.

#### LoginRoute

Route that marks a specific route as the place to go in order to login.

```html
<LoginRoute path='/login' component={LoginPage} />
```

#### LogoutRoute

Route that when accessed, ends the user session.

```html
<LogoutRoute path='/logout' />
```

Specify `redirectTo` to set the path to redirect to after logging out. If this isn't specified, then it falls back to the unauthenticated `HomeRoute` path.

```html
<LogoutRoute redirectTo='/pathToRedirectTo' />
```

## Contexts

#### authenticated (bool)

If you want to know if the user is authenticated or not, include the `authenticated` context.

```javascript
class AuthenticatedExample extends React.Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool
  };

  render() {
    return (
      <p>
        { this.context.authenticated ?
          'Authenticated!' :
          'Not authenticated!'
        }
      </p>
    );
  }
}
```

#### user (object)

If you want to retrieve the user, then include the `user` context. The value will be `undefined` if the user is not authenticated.

```javascript
class UserExample extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <p>
        Hello {this.context.user.givenName}!
      </p>
    );
  }
}
```

## Components

#### Authenticated

Renders any child components if there is an established user session.

```html
<Authenticated>
  You are authenticated!
</Authenticated>
```

Specify the option `inGroup` to only show child components when a user is in a certain group.

```html
<Authenticated inGroup="administrator">
  You are authenticated as an administrator!
</Authenticated>
```

If you want to specify more complex groups, please see section [Group Expressions](#group-expressions).

**Important:** In order to use the `inGroup` option, you must expand the `groups` resource for the `/me` endpoint.

#### NotAuthenticated

Renders any child components if there isn't an established user session.

```html
<NotAuthenticated>
  You are not authenticated!
</NotAuthenticated>
```

Specify the option `inGroup` to only show child components when a user isn't in a certain group.

```html
<NotAuthenticated inGroup="administrator">
  You are authenticated as an administrator!
</NotAuthenticated>
```

If you want to specify more complex groups, please see section [Group Expressions](#group-expressions).

**Important:** In order to use the `inGroup` option, you must expand the `groups` resource for the `/me` endpoint.

#### LoginForm

Renders a username and password login form.

```html
<LoginForm />
```

Specify `redirectTo` to set the path to redirect to after logging in. If this isn't specified, then it falls back to the authenticated `HomeRoute` path.

```html
<LoginForm redirectTo='/pathToRedirectTo' />
```

Specify `hideSocial` to hide the ability to sign in with a social provider.

```html
<LoginForm hideSocial={true} />
```

Customize the form by providing your own markup.

```html
<LoginForm>
  <p>
    <label htmlFor="username">Username or Email</label><br />
    <input id="username" type="text" name="username" />
  </p>
  <p>
    <label htmlFor="password">Password</label><br />
    <input id="password" type="password" name="password" />
  </p>
  <p data-spIf="form.error">
    <strong>Error:</strong><br />
    <span data-spBind="form.errorMessage" />
  </p>
  <p>
    <input type="submit" value="Login" />
  </p>
</LoginForm>
```

**Important:** To use a custom field component the name of the component must contain one of these three words: `text`, `input` or `field`.
Alternatively, the component can have arbitrary name if it has the `spInputLike` (or `data-spInputLike`) property set. If you minify your code,
prefer using this property to relying on the component name, as the latter may be mangled by the minifier.
The component must also support the properties `name` and `onChange`. The property `name` should represent the name of the field, and the
`onChange` property a handler for the field's `onChange` event.

If you want to handle the form `onSubmit()` event, then simply provide a callback for it.

```javascript
class LoginPage extends React.Component {
  onFormSubmit(e, next) {
    // e.data will contain the data mapped from your form.
    console.log("Form submitted", e.data);

    // To return an error message, call next() as:
    // next(new Error('Something in the form is wrong.'));

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }

  render() {
    return <LoginForm onSubmit={this.onFormSubmit.bind(this)} />;
  }
}
```

Use the `onSubmitError()` event to perform an action when the form submits erroneously.

```javascript
class LoginPage extends React.Component {
  onFormSubmitError(e, next) {
    // e will contain values about the event.
    console.log('Form submitted erroneously', e.data, e.error);

    // The function next() must be called in order for the form to continue processing.
    // Override with a new error by calling next(newError).
    next();
  }

  render() {
    return <LoginForm onSubmitError={this.onFormSubmitError.bind(this)} />;
  }
}
```

Use the `onSubmitSuccess()` event to perform an action when the form submits successfully.

```javascript
class LoginPage extends React.Component {
  onFormSubmitSuccess(e, next) {
    // e will contain values about the event.
    console.log('Form submitted succesfully', e.data, e.result);

    // The function next() must be called in order for the form to continue processing.
    next();
  }

  render() {
    return <LoginForm onSubmitSuccess={this.onFormSubmitSuccess.bind(this)} />;
  }
}
```

#### RegistrationForm

Renders a registration form.

```html
<RegistrationForm />
```

Specify `redirectTo` to set the path to redirect to after registering.  If this isn't specified, then it falls back to the authenticated `HomeRoute` path.

```html
<RegistrationForm redirectTo='/pathToRedirectTo' />
```

Specify `hideSocial` to hide the ability to register with a social provider.

```html
<RegistrationForm hideSocial={true} />
```

Customize the form by providing your own markup.

By default, the registration form will render these four fields, and they will be required by the user: `givenName`, `surname`, `email`, and `password`. Express.js users who want to make `givenName` and/or `surname` optional, or to add new required fields (like `username`), can refer to [Stormpath Express Library Guide](https://docs.stormpath.com/nodejs/express/latest/registration.html).

```html
<RegistrationForm>
  <div data-spIf="account.created">
    <span data-spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
  </div>
  <div data-spIf="!account.created">
    <p>
      <label htmlFor="firstName">First name</label><br />
      <input id="firstName" type="text" name="givenName" />
    </p>
    <p>
      <label htmlFor="lastName">Last name</label><br />
      <input id="lastName" type="text" name="surname" />
    </p>
    <p>
      <label htmlFor="email">Email</label><br />
      <input id="email" type="text" name="email" />
    </p>
    <p>
      <label htmlFor="password">Password</label><br />
      <input id="password" type="password" name="password" />
    </p>
    <p data-spIf="form.error">
      <strong>Error:</strong><br />
      <span data-spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Register" />
    </p>
  </div>
</RegistrationForm>
```

Set custom data fields by prefixing field names with `customData`.

```html
<input type="text" name="customData.color" />
```

**Important:** If you are using one of our framework integrations, then all custom data fields during registration must be white listed in the framework configuration.  For specific examples, please see:
* [Express-Stormpath -- Creating Custom Fields](http://docs.stormpath.com/nodejs/express/latest/registration.html#creating-custom-fields)
* [Stormpath ASP.NET -- Adding Custom Fields](https://docs.stormpath.com/dotnet/aspnet/latest/registration.html#adding-custom-fields).
* [Stormpath ASP.NET Core -- Adding Custom Fields](https://docs.stormpath.com/dotnet/aspnetcore/latest/registration.html#adding-custom-fields).
* [Stormpath Laravel (PHP) -- Modifying Default Fields](https://docs.stormpath.com/php/laravel/latest/registration.html#modifying-default-fields).
* [Stormpath Spring Boot Web Starter -- Custom Data](https://docs.stormpath.com/java/spring-boot-web/registration.html#custom-data).

**Important:** To use a custom field component the name of the component must contain one of these three words: `text`, `input` or `field`.
The component must also support the properties `name` and `onChange`. The property `name` should represent the name of the field, and the
`onChange` property a handler for the field's `onChange` event.

If you want to handle the form `onSubmit()` event, then simply provide a callback for it.

```javascript
class RegistrationPage extends React.Component {
  onFormSubmit(e, next) {
    // e.data will contain the data mapped from your form.
    console.log("Form submitted", e.data);

    // To return an error message, call next() as:
    // next(new Error('Something in the form is wrong.'));

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }

  render() {
    return <RegistrationForm onSubmit={this.onFormSubmit.bind(this)} />;
  }
}

```
Use the `onSubmitError()` event to perform an action when the form submits erroneously.

```javascript
class RegistrationPage extends React.Component {
  onFormSubmitError(e, next) {
    // e will contain values about the event.
    console.log('Form submitted erroneously', e.data, e.error);

    // The function next() must be called in order for the form to continue processing.
    // Override with a new error by calling next(newError).
    next();
  }

  render() {
    return <RegistrationForm onSubmitError={this.onFormSubmitError.bind(this)} />;
  }
}
```

Use the `onSubmitSuccess()` event to perform an action when the form submits successfully.

```javascript
class RegistrationPage extends React.Component {
  onFormSubmitSuccess(e, next) {
    // e will contain values about the event.
    console.log('Form submitted succesfully', e.data, e.result);

    // The function next() must be called in order for the form to continue processing.
    next();
  }

  render() {
    return <RegistrationForm onSubmitSuccess={this.onFormSubmitSuccess.bind(this)} />;
  }
}
```

#### ResetPasswordForm

Renders a password reset form.

```html
<ResetPasswordForm />
```

Customize the form by providing your own markup.

```html
<ResetPasswordForm>
  <div data-spIf="form.sent">
    <p>We have sent a password reset link to the email address of the account that you specified.<br />
    Please check your email for this message, then click on the link.</p>
  </div>
  <div data-spIf="!form.sent">
    <p>
      <label htmlFor="email">Email</label><br />
      <input id="email" type="text" name="email" />
    </p>
    <p data-spIf="form.error">
      <strong>Error:</strong><br />
      <span data-spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Request Password reset" />
    </p>
  </div>
</ResetPasswordForm>
```

**Important:** To use a custom field component the name of the component must contain one of these three words: `text`, `input` or `field`.
The component must also support the properties `name` and `onChange`. The property `name` should represent the name of the field, and the
`onChange` property a handler for the field's `onChange` event.

If you want to handle the form `onSubmit()` event, then simply provide a callback for it.

```javascript
class ResetPasswordPage extends React.Component {
  onFormSubmit(e, next) {
    // e.data will contain the data mapped from your form.
    console.log("Form submitted", e.data);

    // To return an error message, call next() as:
    // next(new Error('Something in the form is wrong.'));

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }

  render() {
    return <ResetPasswordForm onSubmit={this.onFormSubmit.bind(this)} />;
  }
}
```

#### ChangePasswordForm

Renders a change password form. The parameter `spToken` is required in order for the token to be validated.

```html
<ChangePasswordForm spToken={this.props.location.query.sptoken} />
```

Customize the form by providing your own markup.

```html
<ChangePasswordForm spToken={requiredSpToken}>
  <div data-spIf="form.sent">
    <p>Your new password has been set. Please <LoginLink />.</p>
  </div>
  <div data-spIf="!form.sent">
    <p>
      <label htmlFor="password">Password</label><br />
      <input id="password" type="password" name="password" required />
    </p>
    <p>
      <label htmlFor="confirmPassword">Password (again)</label><br />
      <input id="confirmPassword" type="password" name="confirmPassword" required />
    </p>
    <p data-spIf="form.error">
      <strong>Error:</strong><br />
      <span data-spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Change Password" />
    </p>
  </div>
</ChangePasswordForm>
```

**Important:** To use a custom field component the name of the component must contain one of these three words: `text`, `input` or `field`.
The component must also support the properties `name` and `onChange`. The property `name` should represent the name of the field, and the
`onChange` property a handler for the field's `onChange` event.

If you want to handle the form `onSubmit()` event, then simply provide a callback for it.

```javascript
class ChangePasswordPage extends React.Component {
  onFormSubmit(e, next) {
    // e.data will contain the data mapped from your form.
    console.log("Form submitted", e.data);

    // To return an error message, call next() as:
    // next(new Error('Something in the form is wrong.'));

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }

  render() {
    return <ChangePasswordForm spToken={requiredSpToken} onSubmit={this.onFormSubmit.bind(this)} />;
  }
}
```

#### UserProfileForm

Renders a form that allows you to update the user profile.

```html
<UserProfileForm />
```

**Important:** In order to update user data, you need to provide your own POST API for the `me` endpoint.

Using the `express-stormpath` library, simply expose a new endpoint as shown below.

```javascript
app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount() {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password();

      saveAccount();
    });
  } else {
    saveAccount();
  }
});
```

Customize the form by providing your own markup.

```html
<UserProfileForm>
  <p>
    <label htmlFor="givenName">First name</label><br />
    <input id="givenName" type="text" name="givenName" />
  </p>
  <p>
    <label htmlFor="surname">Last name</label><br />
    <input id="email" type="text" name="surname" />
  </p>
  <p>
    <label htmlFor="email">Email</label><br />
    <input id="email" type="text" name="email" />
  </p>
  <p data-spIf="form.error">
    <strong>Error:</strong><br />
    <span data-spBind="form.errorMessage" />
  </p>
  <p data-spIf="form.successful">
    Profile updated.
  </p>
  <p>
    <input type="submit" value="Update" />
  </p>
</UserProfileForm>
```

Access custom data fields by prefixing field names with `customData`.

```html
<input type="text" name="customData.color" />
```

**Important:** Set the `web.me.expand.customData` config to `true` in order to have the custom data fields populated.

**Important:** To use a custom field component the name of the component must contain one of these three words: `text`, `input` or `field`.
The component must also support the properties `name` and `onChange`. The property `name` should represent the name of the field, and the
`onChange` property a handler for the field's `onChange` event.

If you want to handle the form `onSubmit()` event, then simply provide a callback for it.

```javascript
class ProfilePage extends React.Component {
  onFormSubmit(e, next) {
    // e.data will contain the data mapped from your form.
    console.log("Form submitted", e.data);

    // To return an error message, call next() as:
    // next(new Error('Something in the form is wrong.'));

    // Or if you want to change the data being sent, call it as:
    // next(null, { myNewData: '123' });

    // If you call next without any arguments,
    // it will simply proceed processing the form.
    next();
  }

  render() {
    return <UserProfileForm onSubmit={this.onFormSubmit.bind(this)} />;
  }
}
```

#### VerifyEmailView

Renders an email verification view. The parameter `spToken` is required in order for the token to be validated.

```html
<VerifyEmailView spToken={this.props.location.query.sptoken} />
```

#### LoginLink

Renders a link that points to the LoginRoute or `/login` if no LoginRoute is specified.

```html
<LoginLink />
<LoginLink><img src="wrap-something-in-a-login-link.png" /></LoginLink>
```

#### SocialLoginLink

Renders a link that can be used to sign in with a social provider.

```html
<SocialLoginLink providerId='facebook' />
<SocialLoginLink providerId='facebook'>Sign in with Facebook</SocialLoginLink>
```

Renders a link that can be used to sign in using a social provider.

```html
<SocialLoginLink providerId='facebook' />
```

Set specific scopes by providing the `scope` option.

```html
<SocialLoginLink providerId='facebook' scope='email user_friends' />
```

Set your own redirect URI by providing the `redirectUri` option. If this isn't set then it defaults to `[protocol]://[host]/callbacks/[providerId]`.

```html
<SocialLoginLink providerId='facebook' redirectUri='http://www.example.com/callbacks/facebook' />
```

#### SocialLoginButton

Renders a button that can be used to sign in with a social provider.

```html
<SocialLoginButton providerId='facebook' />
<SocialLoginButton providerId='facebook'>Sign in with Facebook</SocialLoginButton>
```

If you don't want the button to show an icon, then simply disable it by setting the `hideIcon` option.

```html
<SocialLoginButton providerId='facebook' hideIcon={ true } />
```

**Note:** The same options that are supported by the `SocialLoginLink` component are also supported by this.

**Important:** This component relies on [Font Awesome](http://fortawesome.github.io/Font-Awesome/) in order to render icons for the various social providers. So if you want to use this button with icons, you also need to install Font Awesome on your site.

#### LogoutLink

Renders a link that points to the LogoutRoute or `/logout` if no LogoutRoute is specified.

```html
<LogoutLink />
<LogoutLink><img src="wrap-something-in-a-logout-link.png" /></LogoutLink>
```

## Other

### Group Expressions

Group expressions are expressions that can be applied to components that support groups.
These expressions are plain JavaScript boolean statements but with the exception that they are scoped so that the groups are global variables.

This means that you can write dynamic expressions such as:

```javascript
(administrator || support) && !engineer
```

Which when executed would roughly translate into:

```javascript
if ((administrator || support) && !engineer) {
  return true;
} else {
  return false;
}
```

Note: If a group name contains a space, then that space should be replaced with a underscore. I.e. group `super administrator` should be `super_administrator` as illustrated below:

```javascript
super_administrator || engineer
```

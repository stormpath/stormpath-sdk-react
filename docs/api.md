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
  // Optional: Set if you want to use your own Flux dispatcher.
  dispatcher: instanceOfYourOwnFluxDispatcher,

  // Optional: Set if you want to to use another API endpoint.
  // Values shown below are the defaults.
  endpoints: {
    baseUri: null,
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
  <p spIf="form.error">
    <strong>Error:</strong><br />
    <span spBind="form.errorMessage" />
  </p>
  <p>
    <input type="submit" value="Login" />
  </p>
</LoginForm>
```

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

#### RegistrationForm

Renders a registration form.

```html
<RegistrationForm />
```

Specify `redirectTo` to set the path to redirect to after registering.  If this isn't specified, then it falls back to the authenticated `HomeRoute` path.

```html
<RegistrationForm redirectTo='/pathToRedirectTo' />
```

Customize the form by providing your own markup.

```html
<RegistrationForm>
  <div spIf="account.created">
    <span spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
  </div>
  <div spIf="!account.created">
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
    <p spIf="form.error">
      <strong>Error:</strong><br />
      <span spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Register" />
    </p>
  </div>
</RegistrationForm>
```

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

#### ResetPasswordForm

Renders a password reset form.

```html
<ResetPasswordForm />
```

Customize the form by providing your own markup.

```html
<ResetPasswordForm>
  <div spIf="form.sent">
    <p>We have sent a password reset link to the email address of the account that you specified.<br />
    Please check your email for this message, then click on the link.</p>
  </div>
  <div spIf="!form.sent">
    <p>
      <label htmlFor="email">Email</label><br />
      <input id="email" type="text" name="email" />
    </p>
    <p spIf="form.error">
      <strong>Error:</strong><br />
      <span spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Request Password reset" />
    </p>
  </div>
</ResetPasswordForm>
```

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
  <p spIf="form.error">
    <strong>Error:</strong><br />
    <span spBind="form.errorMessage" />
  </p>
  <p spIf="form.successful">
    Profile updated.
  </p>
  <p>
    <input type="submit" value="Update" />
  </p>
</UserProfileForm>
```

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
<EmailVerificationView spToken={this.props.location.query.sptoken} />
```

#### LoginLink

Renders a link that points to the LoginRoute or `/login` if no LoginRoute is specified.

```html
<LoginLink />
<LoginLink><img src="wrap-something-in-a-login-link.png" /></LoginLink>
```

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
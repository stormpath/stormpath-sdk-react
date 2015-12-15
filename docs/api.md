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

#### AuthenticatedRoute

Route that when used, requires that a session is established before continuing. Else redirects the user to the login route.

```html
<AuthenticatedRoute path='/home/protected' component={RegisterPage} />
```

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

## Components

#### Authenticated

Renders any child components if there is an established user session.

```html
<Authenticated>
  You are authenticated!
</Authenticated>
```

#### NotAuthenticated

Renders any child components if there isn't an established user session.

```html
<NotAuthenticated>
  You are not authenticated!
</NotAuthenticated>
```

#### LoginForm

Renders a username and password login form.

```html
<LoginForm redirectTo='/home' />
```

#### RegistrationForm

Renders a registration form.

```html
<RegistrationForm />
```

#### ResetPasswordForm

Renders a password reset form.

```html
<ResetPasswordForm />
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

## Base Components

#### UserComponent

Extend a component with user state.

```javascript
class HelloUser extends UserComponent {
  render() {
    return (
      <p>
      	Hello {this.state.user.username}!
      </p>
    );
  }
}

```

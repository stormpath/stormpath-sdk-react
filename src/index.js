import app from './app';

export Context from './Context';
export Router from './components/Router';

export actions from './actions/UserActions';
export constants from './constants/UserConstants';

export LoginRoute from './components/LoginRoute';
export LogoutRoute from './components/LogoutRoute';
export AuthenticatedRoute from './components/AuthenticatedRoute';

export Authenticated from './components/Authenticated';
export NotAuthenticated from './components/NotAuthenticated';

export LoginLink from './components/LoginLink';
export LogoutLink from './components/LogoutLink';

export LoginForm from './components/LoginForm';
export RegistrationForm from './components/RegistrationForm';
export ResetPasswordForm from './components/ResetPasswordForm';
export VerifyEmailView from './components/VerifyEmailView';

export UserField from './components/UserField';
export UserComponent from './components/UserComponent';

// When not using ES6, enable people to use ReactStormpath.init()
// instead of ReactStormpath.default.init().
export function init() {
  app.init(...arguments);
};

export default app;

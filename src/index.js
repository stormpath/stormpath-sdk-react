import app from './app';

export context from './context';
export Router from './components/Router';

export actions from './actions/UserActions';
export constants from './constants/UserConstants';

export HomeRoute from './components/HomeRoute';
export LoginRoute from './components/LoginRoute';
export LogoutRoute from './components/LogoutRoute';
export AuthenticatedRoute from './components/AuthenticatedRoute';

export Authenticated from './components/Authenticated';
export NotAuthenticated from './components/NotAuthenticated';

export LoginLink from './components/LoginLink';
export LogoutLink from './components/LogoutLink';

export LoginForm from './components/LoginForm';
export UserProfileForm from './components/UserProfileForm';
export RegistrationForm from './components/RegistrationForm';
export ResetPasswordForm from './components/ResetPasswordForm';
export ChangePasswordForm from './components/ChangePasswordForm';
export VerifyEmailView from './components/VerifyEmailView';

export SocialLoginLink from './components/SocialLoginLink';
export SocialLoginButton from './components/SocialLoginButton';

export UserField from './components/UserField';
export UserComponent from './components/UserComponent';

// When not using ES6, enable people to use ReactStormpath.init() and
// ReactStormpath.getAccessToken() instead of ReactStormpath.default.init()
// and ReactStormpath.default.getAccessToken()
export function init() {
  app.init(...arguments);
};

export function getAccessToken() {
  return app.getAccessToken();
}

export default app;

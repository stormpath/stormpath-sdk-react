## 1.3.3 (November 10, 2016)

Chores:

  - Upgraded packages to their latest versions.

Fixes:

  - Downgraded the `history` module to version `2.1.2` due to React Router incompatibility.

## 1.3.2 (November 4, 2016)

Fixes:

  - Fix: Router props inheritance not working in IE <= 10.

## 1.3.1 (August 22, 2016)

Features:

  - Custom data support.
  - Support for additional `LoginForm` and `RegistrationForm` events.

## 1.3.0 (August 8, 2016)

Fixes:

  - Fix: Login request should use login instead of username field.
  - Fix: Support routes as property to Router.
  - Fix: redirectTo should be unchanged after state change.
  - Fix: Always forward props from components to child elements.
  - Fix: Change the user-agent to have stormpath-sdk-react as a fixed name.
  - Fix: Set withCredentials if the requested domain differs from the one we're.
  - Fix: React unknown prop.

## 1.2.2 (June 30, 2016)

Fixes:

  - Fix so that login retrieves session data from the `/me` endpoint instead of the `/login` endpoint result.

## 1.2.1 (May 5, 2016)

Fixes:

  - Fix issue with deprecated onEnter replaceState in react-router v2.

## 1.2.0 (May 5, 2016)

Notes:

  - Updated dependencies to their latest versions. Most notably `react` to
  version `15.0.2` and `react-router` to version `2.4.0`.

Fixes:

  - Fix issue with SocialLoginLink `redirectUri` being named `redirectTo`.

## 1.1.2 (Apr 26, 2016)

Features:

  - Redux support.

## 1.1.1 (Mar 31, 2016)

Fixes:

  - Rebuilt dist files.

## 1.1.0 (Mar 31, 2016)

Features:

  - Add Router context support ([#43](https://github.com/stormpath/stormpath-sdk-react/pull/43))
  - Add support for updating the user profile ([#44](https://github.com/stormpath/stormpath-sdk-react/pull/44))
  - Add group support ([#47](https://github.com/stormpath/stormpath-sdk-react/pull/47))
  - Add ChangePasswordForm to support changing password ([#50](https://github.com/stormpath/stormpath-sdk-react/pull/50))

## 1.0.0 (Mar 1, 2016)

Features:

  - Change logout request to use POST ([#41](https://github.com/stormpath/stormpath-sdk-react/pull/41))
  - Add support for the registration view model ([#39](https://github.com/stormpath/stormpath-sdk-react/pull/39))
  - Add support for the login view model ([#38](https://github.com/stormpath/stormpath-sdk-react/pull/38))
  - Add support for new error structure ([#35](https://github.com/stormpath/stormpath-sdk-react/pull/35))
  - Add X-Stormpath-Agent header to requests ([#31](https://github.com/stormpath/stormpath-sdk-react/pull/31))
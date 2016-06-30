## 1.2.1 to 1.2.2 (June 30, 2016)

Nothing to do.

## 1.2.0 to 1.2.1 (May 5, 2016)

Nothing to do.

## 1.1.1 to 1.2.0 (May 5, 2016)

Important:

  - We've updated to React v15 and React-Router v2. So when upgrading, please see
  the [React v15 upgrade guide](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) and
  the [React-Router v2 upgrade guide](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md).

## 1.1.1 to 1.1.2 (Apr 26, 2016)

Nothing to do.

## 1.1.0 to 1.1.1 (Apr 13, 2016)

Nothing to do.

## 1.0.0 to 1.1.0 (Mar 31, 2016)

Notice:

  - The UserComponent and UserField components have been deprecated and will be removed
  in the future. So if you are using these, please take a look at our new context support
  instead (see docs). It makes integrating user data into your components much easier.

## 0.5.0 to 1.0.0 (Mar 1, 2016)

Breaking:

  - The logout request has changed from doing a GET to a POST request. So if you're
  using the `express-stormpath` module you'll have to assure that you're running at
  least `express-stormpath` version `3.0.0`.

Notice:

  - The `LogoutLink` previously redirected the user to the path of the `LogoutRoute`.
  This has changed. The `LogoutRoute` is in fact no longer needed. So instead of
  redirecting to the `LogoutRoute` path, the `LogoutLink` will take care of doing
  the logout itself.
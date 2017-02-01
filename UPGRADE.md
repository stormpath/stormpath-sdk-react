## 1.x/2.x to 3.0.0 (TBD)

This version adds support for the [Stormpath Client API][], which is specifically designed for front-end and mobile applications.  We suggest converting your React application to using this API for authenticating your users.  While the Client API is an easier way to authenticate users and get access tokens, your server is still responsible for authorizing requests with those tokens.  Our framework integrations such as [Express-Stormpath][] can still be used for this purpose.

**If you are going to use the Client API:**

- Please see the current [README][] for an example of how to find your Client API domain and pass it to this library.
- If you are using [Express-Stormpath][], you should upgrade to 3.2.0 or later, and change any usage of `stormpath.loginRequired` to `stormpath.authenticationRequired`

**If you do not wish to use the Client API:**

If you already have a React application that is integrated with one of our server framework integrations, or you simply don't want to use the Client API and prefer to use our standard cookie approach, you can tell the React SDK to use your server with the cookie token strategy.  Please see the updated [Stormpath React SDK API Documentation][] for an example.

## 2.0.0 (January 13, 2017)

*Deprecated*. This version has been deprecated, please upgrade 3.0.0 instead.  This version introduced Client API support, but made it difficult to still use our traditional cookie solution for cookie storage.

## 1.3.3 to 1.3.4 (January 9, 2017)

Nothing to do.

## 1.3.2 to 1.3.3 (November 4, 2016)

Important:

  - If you are seeing the error "Uncaught Invariant Violation: You have provided a history object created with
    history v3.x. This version of React Router is not compatible with v3 history objects. Please use history
    v2.x instead." you need to double-check your dependencies and if you are using the `history` module,
    you need to set that to use version `2.1.2`. This is because ReactRouter is incompatible with `history`
    versions >= `3.x.x` and `2.1.2` is the latest `2.x.x` release.

## 1.3.1 to 1.3.2 (November 4, 2016)

Nothing to do.

## 1.3.0 to 1.3.1 (August 22, 2016)

Nothing to do.

## 1.2.2 to 1.3.0 (August 8, 2016)

Important:

  - Due to React's new "Unkonwn Prop" warning (see https://facebook.github.io/react/warnings/unknown-prop.html) all `spIf` and `spBind` element attributes should be prefixed with `data-`.
    I.e. `spIf` should be `data-spIf` and `spBind` should be `data-spBind`. Adding the `data-` prefix will remove the the "Unkonwn Prop" warnings and guarantee future compatibility.

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

[Express-Stormpath]: https://github.com/stormpath/express-stormpath
[README]: https://github.com/stormpath/stormpath-sdk-react#stormpath-react-sdk
[Stormpath Client API]: https://docs.stormpath.com/client-api/product-guide/latest/index.html
[Stormpath React SDK API Documentation]: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md
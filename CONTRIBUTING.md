# Contributing

Please read this guide before contributing to this project.

It is assumed that you are on a Mac/Linux machine and
have [Node.js](http://nodejs.org).

### Getting started

Clone this repo to your local machine:

```bash
git clone git@github.com:stormpath/stormpath-sdk-react.git
```

Then install the required dependencies:

```bash
npm install
```

### Building

You can build this library by running (builds everything except dist):

```bash
npm run build
```

Build `/dist` files (do this before creating a release):

```bash
npm run build-dist
```

Only build CommonJS-files. Do this during development:

```bash
npm run build-cjs
```

### Making releases

When releasing, remember to do the following:

* Grab the latest from remote (`$ git pull`) and resolve any merge conflicts.
* Bump version in `package.json` and `brower.json`.
* Rebuild dist files `$ npm run build-dist`.
* Create a commit and push it to your remote.
* Create a tag for the release detailing the changes.
* Publish it to npm (`$ npm publish`).
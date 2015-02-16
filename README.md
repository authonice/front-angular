![authonice logo][logo]

# authonice (angular)

## IN PROGRESS: not ready, yet

This is the [authonice](http://authonice.github.io) frontend for angular.

[![npm](https://nodei.co/npm/authonice-angular.png)](https://www.npmjs.com/package/authonice-angular)
[![Build Status](https://travis-ci.org/authonice/front-angular.svg?branch=master)](https://travis-ci.org/authonice/front-angular)
[![Code Climate](https://codeclimate.com/github/authonice/front-angular/badges/gpa.svg)](https://codeclimate.com/github/authonice/front-angular)

[authonice](http://authonice.github.io) is a platform/language/framework agnostic ecosystem for web-app authentication, with lots of inspiration from [satellizer](https://github.com/sahat/satellizer).

It's designed to work with lots of [backend languages](http://authonice.github.io/backends), [auth services](http://authonice.github.io/services), & [frontend frameworks](http://authonice.github.io/frontends). It's goal is to make you super-happy because your sites are safe, easy to setup & maintain, and stylishly locked-down in your language/frameworks of choice.

If we don't have a module for the frontend-framework/backend-language/auth-service you want to support, [ask us](https://github.com/authonice/authonice.github.io/issues/new?title=Request:%20&labels=request) or [contribute](http://authonice.github.io/contribute)!


## installation

You can install with bower, npm, [download](https://github.com/authonice/front-angular/archive/master.zip) or just add script tags to your HTML.


### webpack/browserify/etc

```js
var authonice = require('authonice-angular');
```

### requirejs

```js
define(['angular','authonice-angular'], function(angular, authonice){
  
});
```

### plain browser globals
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular/0.1.30/angular.min.js"></script>
<script src="https://rawgit.com/authonice/front-angular/master/dist/authonice-angular.min.js"></script>
```

## usage


The API is très simple:

- `loggedIn()` - does the user have a token?
- `login(email, password)` - trade credentials for a token
- `logout()` - forget token
- `register(email, password)` - save some login credentials
- `verify(token)` - prove that the user got an email (or read the console or whatever)
- `user()` - get the current server-side user
- `req()` - a wrapper for `$http` that ensures authentication & defaults to `GET`

For an in-depth example see [demo-node-angular](https://github.com/authonice/demo-node-angular)

[logo]: http://authonice.github.io/logo.png
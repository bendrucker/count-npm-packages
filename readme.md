# count-npm-packages [![Build Status](https://travis-ci.org/bendrucker/count-npm-packages.svg?branch=master)](https://travis-ci.org/bendrucker/count-npm-packages) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/count-npm-packages.svg)](https://greenkeeper.io/)

> Get the number of top level npm packages


## Install

```
$ npm install --save count-npm-packages
```


## Usage

```js
var countNpmPackages = require('count-npm-packages')

countNpmPackages(function (err, count) {
  // ...
})
```

This module counts npm packages using the directory tree. It supports scoped modules. The following directory tree will return **3** packages:

```
.
├── @scope
│   ├── scoped-pkg
│   │   └── package.json
│   └── scoped-pkg-2
│       └── package.json
└── my-pkg
    └── package.json
```

## API

#### `countNpmPackages([directory], callback)` -> `undefined`

##### directory

Type: `string`  
Default: `node_modules`

The working directory from which the function will begin counting. 

##### callback

*Required*  
Type: `function`  
Arguments: `err, count`

A callback that will be called with an error and the number of packages.

## License

MIT © [Ben Drucker](http://bendrucker.me)

# Content Direct
[![Build Status](https://secure.travis-ci.org/davidcaseria/content-direct-node.png?branch=master)](http://travis-ci.org/davidcaseria/content-direct-node)

Node.js bindings for the Content Direct API.


## Getting Started

Install the module with: `npm install content-direct`

```js
var ContentDirect = require('content-direct')('sbx1');
```

## Documentation

### ContentDirect(environment, [defaultHeaders])

The `ContentDirect` constructor takes two arguments: `environment` and `defaultHeaders`. The `environment` variable should be the 4 alphanumberic code for the environment i.e. sbx1. The `defaultHeaders` variable is an object of key/value pairs that should be passed as headers in every API request.

Example:
```js
var ContentDirect = require('content-direct')('sbx1', {
  'CD-User': 'username',
  'CD-Password': 'password',
  'CD-SystemId': 'systemId'
});
```

#### ContentDirect.*Service*.*Method*([headers], body, [callback])

All services and methods listed in the [lib/api.js](lib/api.js) are supported. All API method documentation can be found at the [Content Direct Web Services Guide](https://documentation.doc1.cdops.net/v6.0/WebServices.html). The `headers` variable should contain any additional headers that should be passed in the request in addition to the default headers. The `body` variable is the only required object. An optional callback can be passed which will be called with two variables: a non-null object if an error occured and a response object if the request was successful.

Example:
```js
ContentDirect.Catalog.RetrieveProduct({
  Id: {
    Value: 12345
  }
}, function (err, res) {});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## License

Copyright (c) 2014 David Caseria  
Licensed under the MIT license.

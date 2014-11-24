/*
 *
 * http://contentdirect.csgi.com
 *
 * Copyright (c) 2014 David Caseria
 * Licensed under the MIT license.
 */

'use strict';

var api = require('./api.js'),
  extend = require('extend'),
  request = require('request');

function createMethod(environment, service, method, defaultHeaders) {
  return function () {
    var headers, body, callback;

    if (arguments.length < 1) {
      throw new Error('too few arguments');
    } else if (arguments.length === 1) {
      headers = defaultHeaders;
      body = arguments[0];
      callback = function () {};
    } else if (arguments.length === 2) {
      headers = typeof arguments[1] === 'function' ? null : extend(arguments[0], defaultHeaders);
      body = typeof arguments[1] === 'function' ? arguments[0] : arguments[1];
      callback = typeof arguments[1] === 'function' ? arguments[1] : function () {};
    } else {
      headers = extend(arguments[0], defaultHeaders);
      body = arguments[1];
      callback = arguments[2];
    }

    request({
      uri: 'https://services.' + environment + '.' + (['prd1', 'prd2', 'prd3'].indexOf(environment) !== -1 ? 'contentdirect.tv' : 'cdops.net') + '/' + service + '/' + method,
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
      json: true
    }, function (err, res, resBody) {
      err = resBody.Fault ? resBody.Fault : err;
      callback(err, resBody);
    });
  };
}

module.exports = function (environment, defaultHeaders) {
  var services = {};

  for (var a in api) {
    var service = api[a];
    services[a] = {};

    for (var i = 0; i < service.length; i++) {
      services[a][service[i]] = createMethod(environment, a, service[i], defaultHeaders);
    }
  }

  return services;
};
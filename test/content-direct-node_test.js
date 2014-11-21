/*global describe,it*/
'use strict';
var expect = require('chai').expect,
  api = require('../lib/api.js'),
  ContentDirect = require('../lib/content-direct-node.js')('sbx1');

describe('ContentDirect node module', function () {
  it('should have all the services', function () {
    expect(Object.keys(ContentDirect).length).to.equal(Object.keys(api).length);
  });

  describe('Catalog', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Catalog).length).to.equal(api.Catalog.length);
    });
  });

  describe('Configuration', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Configuration).length).to.equal(api.Configuration.length);
    });
  });

  describe('Metadata', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Metadata).length).to.equal(api.Metadata.length);
    });
  });

  describe('Reporting', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Reporting).length).to.equal(api.Reporting.length);
    });
  });

  describe('Security', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Security).length).to.equal(api.Security.length);
    });
  });

  describe('Subscriber', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Subscriber).length).to.equal(api.Subscriber.length);
    });
  });

  describe('SubscriberManagement', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.SubscriberManagement).length).to.equal(api.SubscriberManagement.length);
    });
  });

  describe('UltraViolet', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.UltraViolet).length).to.equal(api.UltraViolet.length);
    });
  });

  describe('Workflow', function () {
    it('should have all the API methods', function () {
      expect(Object.keys(ContentDirect.Workflow).length).to.equal(api.Workflow.length);
    });
  });
});
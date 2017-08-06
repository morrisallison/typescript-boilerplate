require('ts-node/register');

const expect = require('must');
const jsdom = require('jsdom-global');
const tap = require('tap');

const main = require('../../src/main');

const { describe, it, beforeEach, afterEach } = tap.mocha;

describe('main', () => {
  describe('hello', () => {
    it('returns "Hello World!"', () => {
      expect(main.hello()).to.equal('Hello World!');
    });
  });

  describe('insertDiv', () => {
    let destroyDom;

    beforeEach(() => {
      destroyDom = jsdom();
    });

    afterEach(() => {
      destroyDom();
    });

    it('inserts a DIV element in the body', () => {
      main.insertDiv();
      document.body.childElementCount.must.equal(1);
      document.body.children[0].tagName.must.equal('DIV');
    });
  });
});

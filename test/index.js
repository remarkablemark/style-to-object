'use strict';

const assert = require('assert');
const jsdomify = require('jsdomify').default;
const cases = require('./cases');
const mainParser = require('../')
const serverParser = require('../lib/server-parser');

describe('main parser', () => {
  it('uses server parser by default', () => {
    assert.equal(mainParser, serverParser);
  });
});

describe('server parser', () => {
  const testCases = [...cases.invalid, ...cases.server];
  testCases.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(serverParser(style), expected);
      });
    });
  });
});

describe('client parser', () => {
  let clientParser;

  before(() => {
    jsdomify.create();
    clientParser = require('../lib/client-parser');
  });

  after(() => {
    jsdomify.destroy();
  });

  const testCases = [...cases.invalid, ...cases.client];
  testCases.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(clientParser(style), expected);
      });
    });
  });
});

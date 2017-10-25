'use strict';

const assert = require('assert');
const cases = require('./cases');
const mainParser = require('../')
const serverParser = require('../lib/server-parser');

describe('main parser', () => {
  it('uses server parser by default', () => {
    assert.equal(mainParser, serverParser);
  });
});

describe('server parser', () => {
  cases.default.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(serverParser(style), expected);
      });
    });
  });
});

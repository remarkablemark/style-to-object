'use strict';

const assert = require('assert');
const parser = require('../');
const cases = require('./cases');

describe('parser', () => {
  cases.default.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(parser(style), expected);
      });
    });
  });
});

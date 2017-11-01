'use strict';

const assert = require('assert');
const cases = require('./cases');
const parser = require('../')

describe('parser', () => {
  cases.default.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(parser(style), expected);
      });
    });
  });
});

'use strict';

const assert = require('assert');
const parser = require('../');
const cases = require('./cases');

describe('parser', () => {
  cases.invalid.forEach(({ style, expected }) => {
    describe(`when style=\`${style}\``, () => {
      it(`returns ${expected}`, () => {
        assert.deepEqual(parser(style), expected);
      });
    });
  });
});

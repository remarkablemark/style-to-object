'use strict';

const assert = require('assert');
const cases = require('./cases');
const parser = require('../')

describe('parser', () => {
  cases.default.forEach(({ style, expected }) => {

    describe(`when style=\`${style}\``, () => {
      if (expected === Error) {
        it('throws error', () => {
          assert.throws(() => parser(style), Error);
        });

      } else {
        it(`returns ${JSON.stringify(expected)}`, () => {
          assert.deepEqual(parser(style), expected);
        });
      }
    });

  });
});

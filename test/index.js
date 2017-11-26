'use strict';

const assert = require('assert');
const css = require('css');
const cases = require('./cases');
const parser = require('../')

describe('parser', () => {
  cases.default.forEach(({ style, expected }) => {
    // error case
    describe(`when style=\`${style}\``, () => {
      if (expected === Error) {
        it('throws error', () => {
          assert.throws(() => parser(style), Error);
        });
        return;
      }

      // normal case
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(parser(style), expected);
      });
    });
  });

  describe('when iterator is passed', () => {
    it('returns null', () => {
      const style = cases.styles[0];
      const iterator = () => {};
      assert.equal(parser(style, iterator), null);
    });

    it('passes the arguments: name, value, declaration', () => {
      const style = 'color: #f00;';
      parser(style, (name, value, declaration) => {
        assert.equal(name, 'color');
        assert.equal(value, '#f00');
        assert.deepEqual(
          declaration,
          css.parse(`p{${style}}`).stylesheet.rules[0].declarations[0]
        );
      });
    });

    it('parses comment', () => {
      const style = '/* color: #f00; */';
      parser(style, (name, value, declaration) => {
        assert.equal(name, undefined);
        assert.equal(value, undefined);
        assert.deepEqual(
          declaration,
          css.parse(`p{${style}}`).stylesheet.rules[0].declarations[0]
        );
      });
    });
  });
});

const assert = require('assert');
const css = require('css');
const data = require('./data');
const parse = require('..');

describe('parser', () => {
  data.default.forEach(cases => {
    const [style, expected] = cases;

    // error case
    describe(`when style=\`${style}\``, () => {
      if (expected === Error) {
        it('throws error', () => {
          assert.throws(() => parse(style), Error);
        });
        return;
      }

      // normal case
      it(`returns ${JSON.stringify(expected)}`, () => {
        assert.deepEqual(parse(style), expected);
      });
    });
  });
});

describe('iterator', () => {
  it('returns null', () => {
    const style = 'color: #foo;';
    const iterator = () => {};
    assert.equal(parse(style, iterator), null);
  });

  it('invokes callback with arguments=[name, value, declaration]', () => {
    const style = 'color: #f00;';
    parse(style, (name, value, declaration) => {
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
    parse(style, (name, value, declaration) => {
      assert.equal(name, undefined);
      assert.equal(value, undefined);
      assert.deepEqual(
        declaration,
        css.parse(`p{${style}}`).stylesheet.rules[0].declarations[0]
      );
    });
  });
});

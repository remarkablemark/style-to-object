const assert = require('assert');
const inlineStyleParser = require('inline-style-parser');
const { cases, errors, invalids } = require('./data');
const parse = require('..');

describe('parser', () => {
  cases.forEach((data) => {
    const [style, expected] = data;

    // error case
    describe(`when style=\`${style}\``, () => {
      it(`returns \`${JSON.stringify(expected)}\``, () => {
        assert.deepEqual(parse(style), expected);
      });
    });
  });
});

describe('error', () => {
  errors.forEach((style) => {
    describe(`when style=\`${style}\``, () => {
      it('throws error', () => {
        assert.throws(() => parse(style), Error);
      });
    });
  });
});

describe('invalid', () => {
  invalids.forEach((style) => {
    describe(`when style=\`${style}\``, () => {
      it('returns null', () => {
        assert.equal(parse(style), null);
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
      assert.deepEqual(declaration, inlineStyleParser(style)[0]);
    });
  });

  it('parses comment', () => {
    const style = '/* color: #f00; */';
    parse(style, (name, value, declaration) => {
      assert.equal(name, undefined);
      assert.equal(value, undefined);
      assert.deepEqual(declaration, inlineStyleParser(style)[0]);
    });
  });
});

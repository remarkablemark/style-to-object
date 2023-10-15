import inlineStyleParser from 'inline-style-parser';
import { cases, errors, invalids } from './fixtures';
import parse from '../src';

describe('valid cases', () => {
  describe.each(cases)('when style=%p', (style, expected) => {
    it(`returns \`${JSON.stringify(expected)}\``, () => {
      expect(parse(style)).toEqual(expected);
    });
  });
});

describe('error cases', () => {
  describe.each(errors)('when style=%p', (style) => {
    it('throws error', () => {
      expect(() => {
        parse(style);
      }).toThrow(Error);
    });
  });
});

describe('invalid cases', () => {
  describe.each(invalids)('when style=%p', (style) => {
    it('returns null', () => {
      expect(parse(style as string)).toBe(null);
    });
  });
});

describe('iterator', () => {
  it('returns null', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(parse('color: #foo;', () => {})).toBe(null);
  });

  it('invokes callback with arguments=[name, value, declaration]', () => {
    const style = 'color: #f00;';
    parse(style, (name, value, declaration) => {
      expect(name).toBe('color');
      expect(value).toBe('#f00');
      expect(declaration).toEqual(inlineStyleParser(style)[0]);
    });
  });

  it('parses comment', () => {
    const style = '/* color: #f00; */';
    parse(style, (name, value, comment) => {
      expect(name).toBe(undefined);
      expect(value).toBe(undefined);
      expect(comment).toEqual(inlineStyleParser(style)[0]);
    });
  });
});

import assert from 'assert';
import StyleToObject from '../index.mjs';

assert.strictEqual(typeof StyleToObject, 'function');
assert.deepEqual(StyleToObject('foo: bar'), { foo: 'bar' });

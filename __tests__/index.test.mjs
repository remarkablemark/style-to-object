import assert from 'assert';

import parse from '../esm/index.mjs';

assert.strictEqual(typeof parse, 'function');
assert.deepEqual(parse('foo: bar'), { foo: 'bar' });

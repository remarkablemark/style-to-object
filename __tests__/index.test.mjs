import assert from 'assert/strict';

import parse from '../esm/index.mjs';

assert.equal(typeof parse, 'function');
assert.deepEqual(parse('foo: bar'), { foo: 'bar' });

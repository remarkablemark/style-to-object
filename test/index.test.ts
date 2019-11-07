import StyleToObject = require('style-to-object');

// $ExpectType { [name: string]: string; } | null
StyleToObject('color: red');

// $ExpectError
StyleToObject();

// $ExpectError
StyleToObject(null);

// $ExpectError
StyleToObject(42);

// $ExpectError
StyleToObject(true);

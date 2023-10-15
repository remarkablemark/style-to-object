import StyleToObject from 'style-to-object';

// $ExpectType { [name: string]: string; } | null
StyleToObject('color: red');

// @ts-expect-error: Expected 1-2 arguments, but got 0.
StyleToObject();

// @ts-expect-error: Argument of type 'null' is not assignable to parameter of type 'string'.
StyleToObject(null);

// @ts-expect-error: Argument of type 'number' is not assignable to parameter of type 'string'.
StyleToObject(42);

// @ts-expect-error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
StyleToObject(true);

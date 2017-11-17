# style-to-object

[![NPM](https://nodei.co/npm/style-to-object.png)](https://nodei.co/npm/style-to-object/)

[![NPM version](https://img.shields.io/npm/v/style-to-object.svg)](https://www.npmjs.com/package/style-to-object)
[![Build Status](https://travis-ci.org/remarkablemark/style-to-object.svg?branch=master)](https://travis-ci.org/remarkablemark/style-to-object)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/style-to-object/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/style-to-object?branch=master)
[![Dependency status](https://david-dm.org/remarkablemark/style-to-object.svg)](https://david-dm.org/remarkablemark/style-to-object)

Parses inline style to object:

```js
var parser = require('style-to-object');
parser('color: #C0FFEE; background: #BADA55;');
// { color: "#C0FFEE", background: "#BADA55" }
```

## Installation

[NPM](https://www.npmjs.com/package/style-to-object):

```sh
npm install style-to-object --save
```

[Yarn](https://yarn.fyi/style-to-object):

```sh
yarn add style-to-object
```

[CDN](https://unpkg.com/style-to-object/):

```html
<script src="https://unpkg.com/style-to-object@latest/dist/style-to-object.min.js"></script>
<script>
  var parser = window.StyleToObject;
</script>
```

## Usage

Import the module:

```js
// ES Modules
import parser from 'style-to-object';
```

Parse single declaration:

```js
parse(`
  color: #f00
`);
// { color: '#f00' }
```

Parse multiple declarations:

```js
parse(`
  color: #f00;
  z-index: 42;
`);
// { color: '#f00', 'z-index': '42' }
```

Parse unknown declarations:

```js
parse(`
  foo: bar;
`);
// { foo: 'bar' }
```

Invalid declarations:

```js
parse(1); // null
parse('top:'); // null
parse(`
  top: ;
  right: 1em;
`); // { right: '1em' }
parse('top'); // throws Error
```

## Testing

```sh
$ npm test
$ npm run lint
```

## Special Thanks

- [css](https://github.com/reworkcss/css)

## License

[MIT](https://github.com/remarkablemark/style-to-object/blob/master/LICENSE)

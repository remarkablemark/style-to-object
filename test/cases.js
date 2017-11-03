'use strict';

const invalid = [
  // empty string
  {
    style: '',
    expected: null,
  },

  // number
  {
    style: 42,
    expected: null,
  },

  // null
  {
    style: null,
    expected: null,
  },

  // object
  {
    style: {},
    expected: null,
  },

  // array
  {
    style: ['Array'],
    expected: null,
  },

  // function
  {
    style: function() {},
    expected: null,
  },

  // undefined
  {
    style: undefined,
    expected: null,
  },
];

const styles = [
  // single without semicolon
  {
    style: 'color: #f00',
    expected: { color: '#f00' },
  },

  // multiple with semicolons
  {
    style: `
      font-size: 42px;
      font-family: "Open Sans", Helvetica, sans-serif;
    `,
    expected: {
      'font-size': '42px',
      'font-family': '"Open Sans", Helvetica, sans-serif',
    },
  },

  // url
  {
    style: 'background-image: url("http://cdn.example.com/image.png?v=42");',
    expected: { 'background-image': 'url("http://cdn.example.com/image.png?v=42")' },
  },

  // property prefix
  {
    style: `
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    `,
    expected: {
      '-webkit-hyphens': 'auto',
      '-moz-hyphens': 'auto',
      '-ms-hyphens': 'auto',
      'hyphens': 'auto',
    },
  },

  // value prefix
  {
    style: `
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    `,
    expected: {
      display: 'flex',
    },
  },

  // missing value
  {
    style: 'z-index:',
    expected: {},
  },

  // missing property
  {
    style: ': 42',
    expected: Error,
  },
];

module.exports = {
  default: [
    ...invalid,
    ...styles,
  ],
  invalid,
  styles,
};

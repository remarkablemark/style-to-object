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

// css module
const server = [
  // single without semicolon
  {
    style: 'color: #f00',
    expected: { color: '#f00' },
  },

  // multiple with semicolons
  {
    style: 'font-size: 42px; font-family: "Open Sans", Helvetica, sans-serif;',
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
];

// browser native
const client = [
  // single without semicolon
  {
    style: 'color: red',
    expected: { color: 'red' },
  },

  // browser parser converts hex to rgb
  {
    style: 'color: #f00',
    expected: { color: 'rgb(255, 0, 0)' },
  },

  // multiple with semicolons
  {
    style: 'font-size: 42px; font-family: "Open Sans", Helvetica, sans-serif;',
    expected: {
      'font-size': '42px',
      'font-family': '"Open Sans", Helvetica, sans-serif',
    },
  },

  // browser parse strips unnecessary quotes
  {
    style: 'background-image: url("http://cdn.example.com/image.png?v=42");',
    expected: { 'background-image': 'url(http://cdn.example.com/image.png?v=42)' },
  },
];

module.exports = {
  invalid,
  server,
  client,
};

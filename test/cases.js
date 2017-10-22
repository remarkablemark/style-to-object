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

module.exports = {
  invalid,
};

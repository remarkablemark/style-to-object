const cases = [
  // single without semicolon
  ['color: #f00', { color: '#f00' }],

  // multiple with semicolons
  [
    'font-size: 42px; font-family: "Open Sans", Helvetica, sans-serif;',
    {
      'font-size': '42px',
      'font-family': '"Open Sans", Helvetica, sans-serif'
    }
  ],

  // url
  [
    'background-image: url("http://cdn.example.com/image.png?v=42");',
    {
      'background-image': 'url("http://cdn.example.com/image.png?v=42")'
    }
  ],

  // property prefix
  [
    '-webkit-hyphens: auto; -moz-hyphens: auto; -ms-hyphens: auto; hyphens: auto;',
    {
      '-webkit-hyphens': 'auto',
      '-moz-hyphens': 'auto',
      '-ms-hyphens': 'auto',
      hyphens: 'auto'
    }
  ],

  // value prefix
  [
    'display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;',
    {
      display: 'flex'
    }
  ],

  // missing value
  ['z-index:', null],

  // comment
  ['/* color: #f00; */', null],

  // comment with declaration
  ['/* color: #f00; */ background: blue;', { background: 'blue' }]
];

const errors = [
  // missing property
  ':42',

  // missing end of comment
  '/*'
];

const invalids = [
  undefined,
  null,
  true,
  false,
  0,
  1,
  '',
  {},
  ['Array'],
  () => Function,
  new Date()
];

module.exports = {
  cases,
  errors,
  invalids
};

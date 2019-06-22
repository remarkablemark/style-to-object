const cases = [
  // general
  ['display: inline-block;', { display: 'inline-block' }],
  ['color:red;', { color: 'red' }],
  ['margin: 0 auto;', { margin: '0 auto' }],
  [
    'font-size: .75em; position:absolute;width: 33.3%; z-index:1337;',
    {
      'font-size': '.75em',
      position: 'absolute',
      width: '33.3%',
      'z-index': '1337'
    }
  ],
  [
    'font-family: "Goudy Bookletter 1911", Gill Sans Extrabold, sans-serif;',
    {
      'font-family': '"Goudy Bookletter 1911", Gill Sans Extrabold, sans-serif'
    }
  ],

  // multiple of same property
  [
    'color:rgba(0,0,0,1);color:white;',
    {
      color: 'white'
    }
  ],

  // missing semicolon
  ['line-height: 42', { 'line-height': '42' }],
  [
    'font-style:italic; text-transform:uppercase',
    { 'font-style': 'italic', 'text-transform': 'uppercase' }
  ],

  // extra whitespace
  [' padding-bottom : 1px', { 'padding-bottom': '1px' }],
  ['padding:   12px  0 ', { padding: '12px  0' }],
  [
    `
      -moz-border-radius: 10px 5px;
      -webkit-border-top-left-radius: 10px;
      -webkit-border-top-right-radius: 5px;
      -webkit-border-bottom-right-radius: 10px;
      -webkit-border-bottom-left-radius: 5px;
      border-radius: 10px 5px;
    `,
    {
      '-moz-border-radius': '10px 5px',
      '-webkit-border-top-left-radius': '10px',
      '-webkit-border-top-right-radius': '5px',
      '-webkit-border-bottom-right-radius': '10px',
      '-webkit-border-bottom-left-radius': '5px',
      'border-radius': '10px 5px'
    }
  ],

  // text and url
  ['content: "Lorem ipsum";', { content: '"Lorem ipsum"' }],
  ['content: "foo: bar;";', { content: '"foo: bar;"' }],
  [
    ('background-image: url("http://cdn.example.com/image.png?v=42");',
    {
      'background-image': 'url("http://cdn.example.com/image.png?v=42")'
    })
  ],
  [
    'background: #123456 url("https://foo.bar/image.png?v=2")',
    {
      background: '#123456 url("https://foo.bar/image.png?v=2")'
    }
  ],

  // property prefix
  [
    ('-webkit-hyphens: auto; -moz-hyphens: auto; -ms-hyphens: auto; hyphens: auto;',
    {
      '-webkit-hyphens': 'auto',
      '-moz-hyphens': 'auto',
      '-ms-hyphens': 'auto',
      hyphens: 'auto'
    })
  ],

  // value prefix
  [
    'display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;',
    {
      display: 'flex'
    }
  ],

  // comment
  ['/* color: #f00; */ background: blue;', { background: 'blue' }],
  [
    'top: 0; /* comment */ bottom: 42rem;',
    {
      top: '0',
      bottom: '42rem'
    }
  ],
  [
    ` right: 0; /* comment */
    /* comment */   left: 42rem; `,
    {
      right: '0',
      left: '42rem'
    }
  ],

  // custom
  [
    'foo: bar;',
    {
      foo: 'bar'
    }
  ],
  ['foo:bar; baz:qux', { foo: 'bar', baz: 'qux' }]
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
  new Date(),

  // missing value
  'z-index:',

  // comment
  '/* color: #f00; */',
  '/**/'
];

module.exports = {
  cases,
  errors,
  invalids
};

var parse = require('css/lib/parse');

/**
 * Parses inline style to object.
 *
 * Example: 'color:red' => { color: 'red' }
 *
 * @param {String} style
 * @return {Object|null}
 */
module.exports = function parseInlineStyle(style) {
  if (!style || typeof style !== 'string') return null;

  // make sure to wrap declarations in placeholder
  var declarations = parse('p{' + style + '}').stylesheet.rules[0].declarations;
  var output = {};

  declarations.forEach(function(declaration) {
    output[declaration.property] = declaration.value;
  });

  return output;
};

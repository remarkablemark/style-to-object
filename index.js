var parse = require('css/lib/parse');

/**
 * Parses inline style to object (server).
 *
 * Example: 'color:red' => { color: 'red' }
 *
 * @param {String} style
 * @return {Object|null}
 */
module.exports = function parseInlineStyleServer(style) {
  if (!style || typeof style !== 'string') return null;

  // make sure to wrap declarations in placeholder
  var declarations = parse('p{' + style + '}').stylesheet.rules[0].declarations;
  var output = {};

  declarations.forEach(function(declaration) {
    var value = declaration.value;
    if (value) {
      output[declaration.property] = value;
    }
  });

  return output;
};

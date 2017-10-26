var p = document.createElement('p');

/**
 * Parses inline style to object (client).
 *
 * Example: 'color:red' => { color: 'red' }
 *
 * @param {String} style
 * @return {Object|null}
 */
module.exports = function parseInlineStyleClient(style) {
  if (!style || typeof style !== 'string') return null;

  p.style = style;
  var declarations = p.style;
  var output = {};
  var property;

  for (var i = 0, len = declarations.length; i < len; i++) {
    property = declarations[i];
    output[property] = declarations[property];
  }

  return output;
};

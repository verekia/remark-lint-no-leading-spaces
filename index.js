var visit = require('unist-util-visit');

/**
 * Lines that are just space characters are not present in
 * the AST, which is why we loop through lines manually.
 */

function noLeadingSpaces(ast, file) {
  var lines = file.toString().split('\n');
  for (var i = 0; i < lines.length; i++) {
    var currentLine = lines[i];
    var lineIndex = i + 1;
    if (/^\s/.test(currentLine)) {
      file.message('Remove leading whitespace', {
        position: {
          start: { line: lineIndex, column: 1 },
          end: { line: lineIndex }
        }
      });
    }
  }
}

module.exports = {
  'no-leading-spaces': noLeadingSpaces
};

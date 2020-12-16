var fs = require('fs');

function read(filename, maybeEncoding) {
  var encoding = maybeEncoding || 'utf8';
  return JSON.parse(fs.readFileSync(filename, encoding));
}

function write(filename, data) {
  return fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

module.exports = {
  read: read,
  write: write
};

var args = require('minimist')(process.argv.slice(2))
  , path = require('path')
  , env;

if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

process.env.NODE_ENV = env;
process.env.REACT_WEBPACK_ENV = env;
module.exports = env;
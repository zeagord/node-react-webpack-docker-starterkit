const base = require('./base');

exports.bind = (app) => {
  app.use('/api', base);
};

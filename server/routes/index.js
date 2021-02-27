const passport = require('passport');

module.exports = (app) => {
  app.use('/api', passport.authenticate('oauth-bearer', { session: false }));

  require('./resident.routes')(app); // eslint-disable-line
  require('./water-gallon.routes')(app); // eslint-disable-line
};

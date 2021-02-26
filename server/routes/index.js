const passport = require('passport')

module.exports = app => {
  app.use('/api', passport.authenticate('oauth-bearer', { session: false }));
  
  require('./resident.routes')(app)
  require('./water-gallon.routes')(app)
}

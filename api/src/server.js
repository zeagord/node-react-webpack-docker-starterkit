const routes = require('./routes');
const path = require('path');
const compression = require('compression');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 9400;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
  secret: "won't tell because it's secret", resave: true,
  saveUninitialized: true,
}));
app.set('view engine', 'pug');
//app.set('view engine', 'html');
app.use('/build', express.static('build', { redirect: false }));

routes.bind(app); //Express /api routes

app.get('*', (req, res) => {
  res.render(path.join(__dirname, 'index.pug'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("ServerMain :: ", error);
  } else {
    console.log('ServerMain :: ==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
  }
});

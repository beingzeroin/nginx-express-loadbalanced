const express = require('express');
const path = require('path');
const winston = require('winston');
const os = require('os');

const app = express();

const appPort = process.env.PORT || 3000
const nodeenv = process.env.NODE_ENV || 'development'
const instanceName = process.env.INSTANCE || os.hostname()

const environment = {
  title: 'Docker with Nginx and Express',
  node: nodeenv,
  instance: instanceName,
  port: appPort
};

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { environment });
});

app.get('/data', (req, res) => {
  res.json(environment);  
});

app.listen(appPort, () => {
  winston.info(`NODE_ENV: ${nodeenv}`);
  winston.info(`INSTANCE: ${instanceName}`);
  winston.info(`EXPRESS: ${appPort}`);
});

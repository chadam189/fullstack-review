console.log('WHAT IS UP server/index.js');
const express = require('express');
const database = require('./../database/index.js');
const CORS = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Promise = require("bluebird");
const request = require('request');
const utils = require('./utils.js');
const rp = require('request-promise');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(CORS());
app.use(morgan('dev'));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
	console.log('req.headers = ', req.headers);
	console.log('req.body = ', req.body);

	let data = req.body;
	data.city = 'SF';
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('POST requests are working!');
  res.send(data);
});

app.get('/', function (req, res) {
	console.log('GET requests are working!');
  console.log('hello');
  res.sendStatus(200);
	res.end('hello');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


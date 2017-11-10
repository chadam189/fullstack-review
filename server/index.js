console.log('WHAT IS UP server/index.js');
const express = require('express');
const database = require('./../database/index.js');
const helpers = require('./../helpers/github.js');
const CORS = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Promise = require("bluebird");
const request = require('request');
const rp = require('request-promise');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(CORS());
app.use(morgan('dev'));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
	Promise.resolve(helpers.getReposByUsername(req.body.user))
	.then((repos) => {
		return database.save(repos);
	})
	.then((repos) => {
		res.send(repos);
	});
});

app.get('/repos', function (req, res) {

  Promise.resolve(database.Repo.find().sort({repo_name: 1}).limit(25).exec((err, data) => {
  	if (err) {
  		console.log('Find call is not working');
  	}
  	return data;
  }))
  .then((results) => {
  	console.log('find has return this data: ', results.length);
	  res.json(results.slice(0,25));
  })


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


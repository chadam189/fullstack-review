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
app.use(morgan('common'));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {

	Promise.resolve(helpers.getReposByUsername(req.body.user))

	.then((repos) => {

		console.log('this is what comes back: ', repos[0].owner.url);

		Promise.resolve(database.save(repos, function (err, results) {
			console.log('save\'s callback was reached');

		}))


	})
	.then((results) => {
		// let stuff = repos[0].owner.url;
		console.log('correcly coming out of database.save');
		console.log('results = ', results);
		res.send(results);

	});


	// // check if requested username is in DB
 //  Promise.resolve(searchDBforUser(req.body.user))
 //  .then((userRepos) => {
 //  	// if user is in DB
 //  	if (userRepos) {
 //  	  // skip past upcoming code where we make an API call	
 //  		throw userRepos;
 //  	}
 //    // if user is not in DB, get their info from GitHub
 //    return helpers.getReposByUsername(req.body.user)
 //  })
 //  .catch((userRepos) => {
 //    return Promise.resolve(userRepos);
 //  })
 //  .error((error) => {
 //    // error handle some shit
 //  })
 //  .then((data) => {
 //  	database.save(data, function (err, results) {

 //  	});
	//   res.send(data);
 //  })

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


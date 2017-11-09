console.log('WHAT IS UP helpers/github.js');
const request = require('request');
const config = require('../config.js');
const Promise = require("bluebird");
const rp = require('request-promise');

let getReposByUsername = (req, res, next) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API



  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  console.log('GRBUN is being called');

  let requestedUser = req.body.user.toString();


  console.log('requestedUser = ', requestedUser);

  let options = {
    url: `https://api.github.com/users/${requestedUser}/repos`,
    // qs: {
    //     access_token: requestedUser // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    },
    json: true // Automatically parses the JSON string in the response
  };
  

  console.log('this is the options request before it goes out: ', JSON.stringify(options, null, 2));
    // see if we already have user in database

  // if not, make new GH request

  rp(options)
    .then(function (repos) {
      console.log('User has %d repos', repos.length);
      // console.log('repos = ', repos);
    })
    .catch(function (err) {
      console.log('ERROR from GH API: ', error)
      // API call failed...
    });


    next();

    // add new user to database

    // send data back to client

}

module.exports.getReposByUsername = getReposByUsername;
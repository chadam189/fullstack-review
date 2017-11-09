console.log('WHAT IS UP helpers/github.js');
const request = require('request');
const config = require('../config.js');
const Promise = require("bluebird");
const rp = require('request-promise');

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/user/repos',
    // qs: {
    //     access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    },
    json: true // Automatically parses the JSON string in the response
  };



    // see if we already have user in database

  // if not, make new GH request

  rp(options)
    .then(function (repos) {
      console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
      // API call failed...
    });

    // add new user to database

    // send data back to client

}

module.exports.getReposByUsername = getReposByUsername;
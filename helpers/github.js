console.log('WHAT IS UP helpers/github.js');
const request = require('request');
const config = require('../config.js');
const Promise = require("bluebird");
const rp = require('request-promise');

let getReposByUsername = (user) => {

  return new Promise(function (resolve, reject) {
    let options = {
      url: `https://api.github.com/users/${user}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      json: true // Automatically parses the JSON string in the response
    };
    

    rp(options)
      .then(function (repos) {
        // console.log('repos = ', repos);
        // console.log('User has %d repos', repos.length);
        resolve(repos);
      })
      .catch(function (error) {
        console.log('ERROR from GH API!');
        reject(error);
      });

  });


}

module.exports.getReposByUsername = getReposByUsername;
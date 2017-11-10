console.log('WHAT IS UP database/index.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection: error'));
db.once('open', () =>  {
	console.log('You are connected to the MONGO database!');
	
});

let repoSchema = mongoose.Schema({
  repo_name: String, // name
  repo_id: {type: Number, unique: true}, // id
  repo_description: String, // description
  repo_url: String, // url
  repo_watchers: Number, // watchers
  owner_name: String, // owner.login
  owner_id: Number, // owner.id
  owner_pic: String, // owner.avatar_url

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {

	var results = [];
	console.log('save\'s inner function was reached');

	for (var i = 0; i < data.length; i++) {
		let obj = {
	    repo_name: data[i].name,
	    repo_id: data[i].id,
	    repo_description: data[i].description,
	    repo_url: data[i].url,
	    repo_watchers: data[i].watchers,
	    owner_name: data[i].owner.login,
	    owner_id: data[i].owner.id,
	    owner_pic: data[i].owner.avatar_url
	   };
	   console.log('this repo got stored: ', obj.repo_name);
		 let newRepo = new Repo(obj);
		 results.push(obj);
		 newRepo.save({});
	}
	return results;
};

module.exports.save = save;

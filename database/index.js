console.log('WHAT IS UP database/index.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// const autoIncrement = require('mongoose-auto-increment');
// const connection = mongoose.createConnection('mongodb://localhost/fetcher');
// autoIncrement.initialize(connection);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection: error'));
db.once('open', () =>  {
	console.log('You are connected to the MONGO database!');
	

});

let repoSchema = mongoose.Schema({
  repo_name: String, // name
  repo_id: Number, // id
  repo_description: String, // description
  repo_url: String, // url
  repo_watchers: Number, // watchers
  owner_name: String, // owner.login
  owner_id: Number, // owner.id
  owner_pic: String, // owner.avatar_url

});

// let userSchema = mongoose.Schema({
//   // id: Number; // auto-increment
//   owner_name: String, // owner.login
//   owner_id: Number, // owner.id
//   owner_pic: String, // owner.avatar_url
//   owner_repos: [repoSchema]

// });

// repoSchema.plugin(autoIncrement.plugin, 'Repo');
let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {

	console.log('save\'s inner function was reached');

	// for (var i = 0; i < data.length; i++) {
		let obj = {
	    repo_name: data[0].name,
	    repo_id: data[0].id,
	    repo_description: data[0].description,
	    repo_url: data[0].url,
	    repo_watchers: data[0].watchers,
	    owner_name: data[0].owner.login,
	    owner_id: data[0].owner.id,
	    owner_pic: data[0].owner.avatar_url
	   };
	   console.log('first repo to be stored: ', obj);
		let newRepo = new Repo(obj);
		newRepo.save(callback);
};
	// }



module.exports.save = save;

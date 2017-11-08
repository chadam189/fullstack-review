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
	
	let repoSchema = mongoose.Schema({
	  // id: Number; // auto-increment
	  repo_name: String, // name
	  repo_id: Number, // id
	  owner_name: String, // owner.login
	  owner_id: Number, // owner.id
	  watchers: Number, // watchers

	});

	// repoSchema.plugin(autoIncrement.plugin, 'Repo');
	let Repo = mongoose.model('Repo', repoSchema);

// 	let save = (/* TODO */) => {
// 	  // TODO: Your code here
// 	  // This function should save a repo or repos to
// 	  // the MongoDB
// 	};

});




// module.exports.save = save;

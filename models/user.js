var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

	name: String,
	password: String,
	age: Number,
	socialSecurity: String,
	address: String,
	email: String,
	username: String,
	accountSet: {
		type: Number,
		default: 0
	},
	role: String

});

module.exports = mongoose.model('User', UserSchema);
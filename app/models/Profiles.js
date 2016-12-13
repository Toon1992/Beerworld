var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  user:String
});

module.exports = mongoose.model('Profile', ProfileSchema);

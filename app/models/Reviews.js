var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name:String,
  rating:Number,
  subject:String,
  description:String,
  beer: {type: mongoose.Schema.Types.ObjectId, ref: 'Beer' }
})

module.exports = mongoose.model('Review', reviewSchema);

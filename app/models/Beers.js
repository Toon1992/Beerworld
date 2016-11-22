// grab the mongoose module
var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
  name : String,
  brewery : String,
  percentage: Number,
  image: String,
  taste: String,
  hop: String,
  color: String,
  rating: Number,
  description:String,
  reviews:[{type: mongoose.Schema.Types.ObjectId, ref:'Review'}]

});

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Beer', BeerSchema);

// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Beer', {
    name : {type : String, default: ''},
    brewery : String,
    percentage: Number,
    image: String,
    taste: String,
    hop: String,
    color: String,
    rating: Number,
    description:String,
    reviews:[{
      reviewName: String,
      reviewRating: String,
      reviewText: String
    }]
});

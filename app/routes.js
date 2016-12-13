// grab the beer model we just created
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Beer = mongoose.model('Beer');
var Profile = mongoose.model('Profile');
var Review = mongoose.model('Review');
var passport = require('passport');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

// server routes ===========================================================
// handle things like api calls
// authentication routes
// sample api route
router.get('/beers', function(req, res, next) {
    Beer.find(function(err, beers) {
        if (err) {
            return next(err);
        }
        res.json(beers); // return all beers in JSON format
    });
});

router.param('beer', function(req, res, next, id) {
    var query = Beer.findById(id);

    query.exec(function(err, beer) {
        if (err) {
            return next(err);
        }
        if (!beer) {
            return next(new Error('cant\'t find beer'));
        }

        req.beer = beer;
        return next();
    });
});

router.get('/beers/:beer', function(req, res) {
    req.beer.populate('reviews', function(err, beer) {
        if (err) {
            return next(err);
        }

        res.json(beer);
    });
});

router.post('/beers/:beer/reviews', auth, function(req, res, next) {
    var review = new Review(req.body);
    review.beer = req.beer;
    review.author = req.payload.username;

    review.save(function(err, review) {
        if (err) {
            return next(err);
        }

        req.beer.reviews.push(review);
        req.beer.save(function(err, beer) {
            if (err) {
                return next(err);
            }

            res.json(review);
        });
    });
});

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.get('/profile', function(req, res, next) {
    Profile.find(function(err, profile) {
      console.log("ik kom hier");
        if (err) {
            return next(err);
        }
        res.json(profile); // return all beers in JSON format
    });
});

router.param('profile', function(req, res, next, id) {
    var query = Profile.findById(id);

    query.exec(function(err, beer) {
        if (err) {
            return next(err);
        }
        if (!profile) {
            return next(new Error('cant\'t find profile'));
        }

        req.profile = profile;
        return next();
    });
});

router.post('/profile', function(req, res, next){
  var profile = new Profile(req.body);

  profile.save(function(err, review) {
      if (err) {
          return next(err);
      }
  });
});


// route to handle creating goes here (app.post)
// route to handle delete goes here (app.delete)

// frontend routes =========================================================
// route to handle all angular requests
// app.get('*', function(req, res) {
//     res.sendfile('./public/index.html'); // load our public/index.html file
// });
module.exports = router;

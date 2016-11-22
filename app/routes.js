// grab the beer model we just created
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Beer = mongoose.model('Beer')
var Review = mongoose.model('Review');



        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        router.get('/beers', function(req, res, next) {
            Beer.find(function(err, beers) {
              if (err){return next(err);}

              res.json(beers); // return all beers in JSON format
            });
        });

        router.param('beer', function(req, res, next, id){
          var query = Beer.findById(id);

          query.exec(function(err, beer){
            if(err){return next(err);}
            if(!beer){return next(new Error('cant\'t find beer'));}

            req.beer = beer;
            return next();
          });
        });

        router.get('/beers/:beer', function(req, res){
          req.beer.populate('reviews', function(err, beer){
            if(err) {return next(err);}

              res.json(beer);
          });
        });

        router.post('/beers/:beer/reviews', function(req, res, next){
          var review = new Review(req.body);
          review.beer = req.beer;

          review.save(function(err,review){
            if(err){return next(err);}

            req.beer.reviews.push(review);
            req.beer.save(function(err,beer){
              if(err){return next(err);}

              res.json(review);
            });
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

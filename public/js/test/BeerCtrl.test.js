describe('BeersController', function(){
  var $controller, BeersController,scope;

  var beertje = {
      "_id" : 1,
      "name" : "Jupiler",
    "brewery" : "Piedbœuf ",
    "percentage" : 5.2,
    "image" : "https://www.horecasupport.be/admin_assets/templates/img_150_310/jp-pils-be-150x310.png",
    "taste" : "Toegankelijk en fris karakter, met een rijke moutsmaak",
    "hop" : "mout, maïs, water, hop en gist",
    "color" : "blond",
    "rating" : 7,
    "description" : "Jupiler is het N°1 bier in België, het land der bieren. De bitterzachte pils wordt gebrouwen met de beste ingrediënten (mout, maïs, water, hop en gist), volgens een onberispelijk vakmanschap.",
    "reviews" : []
  };

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('BeerCtrl'));
  beforeEach(angular.mock.module('BeerService'));
  beforeEach(angular.mock.module('AuthService'));



  beforeEach(inject(function($rootScope,_$controller_){
    scope = $rootScope.$new();
    $controller = _$controller_;
    BeersController = $controller('BeerController', {'$scope': scope, chosenBeer: beertje});
  }));

  it('should be defined', function(){
    expect(BeersController).toBeDefined();
  });
});

describe('Beer factory', function(){
  // it('has a dummy spec to test 2 + 2', function(){
  //   expect(2 + 2).toEqual(4);
  // });
  var beers, $httpBackend, beerRequestHandler;

  var beerList=[
    {
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
    }, {
    "_id" : 2,
    "name" : "Duvel",
    "brewery" : "Duvel moortgat",
    "percentage" : 8.9,
    "image" : "http://www.duvelmoortgat.be/sites/default/files/duvel_packshot.png",
    "taste" : "Licht fruitig, droog aroma, welgehopt, en met een licht bittere nasmaak",
    "hop" : "Saaz-Saaz & Styrian Golding",
    "color" : "Blond",
    "rating" : 9,
    "description" : "Een Duvel geldt nog steeds als dé referentie onder de zwaardere, blonde bieren. Het boeket is pittig en prikkelend in de neus met wat citrus, die zelfs licht neigt naar pompelmoes door het gebruik van enkel de beste nobele hopsoorten. Dit kan ook terug gevonden worden in de smaak, mooi gebalanceerd met een vleugje kruidigheid. Dankzij het hoge CO2-gehalte heeft het bier een zaligmakende rondheid in de mond. Een Duvel is zowel de volmaakte dorstlesser als de ideale aperitief.",
    "reviews" : []
    }
  ];

  beforeEach(angular.mock.module('BeerService'));
  beforeEach(angular.mock.module('AuthService'));


  beforeEach(inject(function(_beer_, _$httpBackend_){
    beers = _beer_;
    $httpBackend = _$httpBackend_;
    beerRequestHandler = $httpBackend.when('GET', '/beers').respond(200,beerList);
  }));

  it('should exist', function(){
    expect(beers).toBeDefined();
  });

  it('should fetch a get request', function(){
    $httpBackend.expectGET('/beers');
    expect($httpBackend.flush).not.toThrow();
  //  $httpBackend.flush();
});


  // describe('.all()', function(){
  //   it('should exist', function(){
  //     expect(Beers.all).toBeDefined();
  //   });
  // });
});

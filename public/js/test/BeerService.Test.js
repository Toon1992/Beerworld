describe('Beer factory', function(){
  // it('has a dummy spec to test 2 + 2', function(){
  //   expect(2 + 2).toEqual(4);
  // });
  var Beers;

  beforeEach(angular.mock.module('BeerService'));
  beforeEach(angular.mock.module('AuthService'));
  

  beforeEach(inject(function(_beer_){
    Beers = _beer_;
  }));

  it('should exist', function(){
    expect(Beers).toBeDefined();
  });

  // describe('.all()', function(){
  //   it('should exist', function(){
  //     expect(Beers.all).toBeDefined();
  //   });
  // });
});

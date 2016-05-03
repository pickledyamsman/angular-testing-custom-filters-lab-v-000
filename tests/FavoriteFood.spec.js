describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter the favorite food correctly', function() {
    var testList = [{
      name: 'Test 1',
      favoriteFood: 'Pizza'
    }, {
      name: 'Test 2',
      favoriteFood: 'Hamburger'
    }, {
      name: 'Test 3',
      favoriteFood: 'Sushi'
    }];
    var results = $filter('favoriteFood')(testList, 'Sushi');
    expect(results[0].name).toBe('Test 3');
  });
});
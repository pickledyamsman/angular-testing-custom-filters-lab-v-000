describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove vowels', function() {
    var results = $filter('removeAllVowels')('matthewcianciolo');
    expect(results).toEqual('mtthwcncl');
  });
});
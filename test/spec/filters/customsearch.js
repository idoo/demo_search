'use strict';

describe('Filter: customSearch', function () {

  // load the filter's module
  beforeEach(module('searchApp'));

  // initialize a new instance of the filter before each test
  var customSearch;
  beforeEach(inject(function ($filter) {
    customSearch = $filter('customSearch');
  }));

  it('should return the input prefixed with "customSearch filter:"', function () {
    var text = 'angularjs';
    expect(customSearch(text)).toBe('customSearch filter: ' + text);
  });

});

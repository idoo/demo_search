'use strict';

describe('Service: dataResource', function () {

  // load the service's module
  beforeEach(module('searchApp'));

  // instantiate service
  var dataResource;
  beforeEach(inject(function (_dataResource_) {
    dataResource = _dataResource_;
  }));

  it('should do something', function () {
    expect(!!dataResource).toBe(true);
  });

});

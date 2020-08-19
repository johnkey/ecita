'use strict';

describe('Service: BackendlessService', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var BackendlessService;
  beforeEach(inject(function (_BackendlessService_) {
    BackendlessService = _BackendlessService_;
  }));

  it('should do something', function () {
    expect(!!BackendlessService).toBe(true);
  });

});

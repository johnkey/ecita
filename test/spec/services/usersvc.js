'use strict';

describe('Service: UserSvc', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var UserSvc;
  beforeEach(inject(function (_UserSvc_) {
    UserSvc = _UserSvc_;
  }));

  it('should do something', function () {
    expect(!!UserSvc).toBe(true);
  });

});

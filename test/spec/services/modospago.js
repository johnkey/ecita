'use strict';

describe('Service: modosPago', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var modosPago;
  beforeEach(inject(function (_modosPago_) {
    modosPago = _modosPago_;
  }));

  it('should do something', function () {
    expect(!!modosPago).toBe(true);
  });

});

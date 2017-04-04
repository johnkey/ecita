'use strict';

describe('Service: MisDatosSvc', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var MisDatos;
  beforeEach(inject(function (_MisDatos_) {
    MisDatos = _MisDatos_;
  }));

  it('should do something', function () {
    expect(!!MisDatos).toBe(true);
  });

});

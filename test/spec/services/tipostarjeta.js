'use strict';

describe('Service: tiposTarjeta', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var tiposTarjeta;
  beforeEach(inject(function (_tiposTarjeta_) {
    tiposTarjeta = _tiposTarjeta_;
  }));

  it('should do something', function () {
    expect(!!tiposTarjeta).toBe(true);
  });

});

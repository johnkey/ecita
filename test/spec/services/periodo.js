'use strict';

describe('Service: periodo', function () {

  // load the service's module
  beforeEach(module('ecitaApp'));

  // instantiate service
  var periodo;
  beforeEach(inject(function (_periodo_) {
    periodo = _periodo_;
  }));

  it('should do something', function () {
    expect(!!periodo).toBe(true);
  });

});

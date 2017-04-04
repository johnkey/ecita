'use strict';

describe('Controller: EmpresaFacturasCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaFacturasCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaFacturasCtrl = $controller('EmpresaFacturasCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaFacturasCtrl.awesomeThings.length).toBe(3);
  });
});

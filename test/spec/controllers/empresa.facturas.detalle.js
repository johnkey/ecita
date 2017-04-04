'use strict';

describe('Controller: EmpresaFacturasDetalleCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaFacturasDetalleCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaFacturasDetalleCtrl = $controller('EmpresaFacturasDetalleCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaFacturasDetalleCtrl.awesomeThings.length).toBe(3);
  });
});

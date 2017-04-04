'use strict';

describe('Controller: EmpresaFacturacionEditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaFacturacionEditarCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaFacturacionEditarCtrl = $controller('EmpresaFacturacionEditarCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaFacturacionEditarCtrl.awesomeThings.length).toBe(3);
  });
});

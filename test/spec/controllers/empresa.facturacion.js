'use strict';

describe('Controller: EmpresaFacturacionCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaFacturacionCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaFacturacionCtrl = $controller('EmpresaFacturacionCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaFacturacionCtrl.awesomeThings.length).toBe(3);
  });
});

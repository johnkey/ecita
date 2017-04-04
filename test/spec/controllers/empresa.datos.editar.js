'use strict';

describe('Controller: EmpresaDatosEditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaDatosEditarCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaDatosEditarCtrl = $controller('EmpresaDatosEditarCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaDatosEditarCtrl.awesomeThings.length).toBe(3);
  });
});

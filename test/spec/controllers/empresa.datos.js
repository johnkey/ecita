'use strict';

describe('Controller: EmpresaDatosCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaDatosCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaDatosCtrl = $controller('EmpresaDatosCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaDatosCtrl.awesomeThings.length).toBe(3);
  });
});

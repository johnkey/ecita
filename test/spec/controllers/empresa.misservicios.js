'use strict';

describe('Controller: EmpresaMisserviciosCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var EmpresaMisserviciosCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    EmpresaMisserviciosCtrl = $controller('EmpresaMisserviciosCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmpresaMisserviciosCtrl.awesomeThings.length).toBe(3);
  });
});

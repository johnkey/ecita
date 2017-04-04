'use strict';

describe('Controller: DatosempresaCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var DatosempresaCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    DatosempresaCtrl = $controller('DatosempresaCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatosempresaCtrl.awesomeThings.length).toBe(3);
  });
});

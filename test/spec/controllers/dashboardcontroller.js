'use strict';

describe('Controller: DashboardcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ecitaApp'));

  var DashboardcontrollerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    DashboardcontrollerCtrl = $controller('DashboardcontrollerCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});

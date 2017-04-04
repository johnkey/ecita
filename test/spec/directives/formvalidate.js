'use strict';

describe('Directive: formvalidate', function () {

  // load the directive's module
  beforeEach(module('ecitaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<formvalidate></formvalidate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formvalidate directive');
  }));
});

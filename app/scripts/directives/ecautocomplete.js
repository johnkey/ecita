'use strict';

/**
 * @ngdoc directive
 * @name ecitaApp.directive:ecAutocomplete
 * @description
 * # ecAutocomplete
 */
angular.module('ecitaApp')
  .directive('ecAutocomplete',['$compile', function ($compile) {

    return {
      restrict: 'AE',
      require:'ecInput',
      link: function postLink(scope, element, attrs,ctrl) {
        
        	var input = element.children().find('input');
      		input.attr('ng-autocomplete','');
      		input.attr('details','google_places');

      		scope.options = {
		      country: 'es',
		      types: attrs.ecAutocomplete
		    }
      		input.attr('options','options');

      		$compile(input)(scope);

      }
    };
 }]);

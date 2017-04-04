'use strict';

/**
 * @ngdoc directive
 * @name ecitaApp.directive:formvalidate
 * @description
 * # formvalidate
 */
angular.module('ecitaApp')
  .directive('formvalidate', function () {
    return {
      restrict: 'A',
      require: 'form',
      scope:{
      	formvalidate:'='
      },
      link: function postLink(scope, element, attrs,formCtrl) {
        
		scope.$watch('formvalidate',function(newValue){
			angular.forEach(newValue,function(value,key){
				formCtrl[key].$error.server=value[0];
			})
			
        })

      }
    };
  });

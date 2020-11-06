'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaDatosCtrl
 * @description
 * # EmpresaDatosCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaDatosCtrl',['$scope','MisDatosSvc','toastr', function ($scope,misDatosSvc,toastr) {
   
      
      misDatosSvc.get().then(function(doc) {
            if (angular.isDefined(doc)){
                $scope.detalle = doc;
                $scope.$apply();
            }else{
                toastr.error('No se han podido obtener los datos.','Error');
            }            
      }).catch(function(error) {
          toastr.error('No se han podido obtener los datos.','Error');
          $scope.errorMessages=error.data;
      });

      
  		
  }]);
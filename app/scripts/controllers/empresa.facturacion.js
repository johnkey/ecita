'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaFacturacionCtrl
 * @description
 * # EmpresaFacturacionCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaFacturacionCtrl', ['$scope','toastr','FacturacionSvc', function ($scope,toastr,facturacionSvc) {
    

  	
     // $scope.facturacion = {};
      facturacionSvc.get().then(function(datos){
        
          $scope.facturacion = datos[0];
          $scope.$apply();
        
      }).catch(function(error) {
          toastr.error('No se han podido obtener los datos.','Error');
          $scope.errorMessages=error.data;
      });
  	
  }]);

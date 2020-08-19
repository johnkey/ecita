'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaDatosCtrl
 * @description
 * # EmpresaDatosCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaDatosCtrl',['$scope','GLOBAL_CONFIG','BackendlessService','toastr', function ($scope,globalConfig,backendlessService,toastr) {
   
      
      var id = {objectId:'B8A55C89-C734-4C25-90F9-397022450575',
                  loadRelations:'contacto' }
      backendlessService.get('clientes',id).then(function(doc) {
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

      
  		//$scope.contactos = $firebaseArray(ref.child('contactos'));
  }]);
'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaMisserviciosCtrl
 * @description
 * # EmpresaMisserviciosCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaMisserviciosCtrl',  ['$scope','$resource','GLOBAL_CONFIG', function ($scope,$resource,globalConfig) {
    
  	var servResource = $resource(globalConfig.host + globalConfig.api + '/misservicios/:id',{id:'@id'});
      $scope.servicios = {};
      servResource.get({id:1},function(datos){
        $scope.servicios = datos;
        
      });
   
  }]);

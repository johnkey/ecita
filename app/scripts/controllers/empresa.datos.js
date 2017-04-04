'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaDatosCtrl
 * @description
 * # EmpresaDatosCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaDatosCtrl',['$scope','$resource','GLOBAL_CONFIG','MisDatosSvc', function ($scope,$resource,globalConfig,misDatosSvc) {
   
   		/*var ref = new Firebase('https://e-cita.firebaseio.com/cuentas/-JxEVYVSUURothTJ7zDu');
  		$scope.detalle = $firebaseObject(ref);
  		$scope.contactos = $firebaseArray(ref.child('contactos'));*/

  		//var misDatosResource = $resource(globalConfig.host + globalConfig.api + '/misdatos/:id',{id:'@id'});
  		$scope.detalle = {};

  		misDatosSvc.get({id:1},function(datos){
  			$scope.detalle = datos;
  			
  		});


  		
  }]);
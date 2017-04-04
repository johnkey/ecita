'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaFacturacionCtrl
 * @description
 * # EmpresaFacturacionCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaFacturacionCtrl', ['$scope','$resource','GLOBAL_CONFIG','FacturacionSvc', function ($scope,$resource,globalConfig,facturacionSvc) {
    

  	/*var ref = new Firebase('https://e-cita.firebaseio.com/cuentas/-JxEVYVSUURothTJ7zDu');
  	$scope.facturacion = {}
    $scope.datos ={};
    ref.child('datosFacturacion').once('value',function(snap){
      $scope.facturacion=snap.val();
      modosPagoSvc.getModoPago($scope.facturacion.modoPago).then(function(data){
        $scope.datos.modoPago=data;
      }
      );

      tiposTarjetaSvc.getTipoTarjeta($scope.facturacion.tipoTarjeta).then(function(data){
        $scope.datos.tipoTarjeta=data;
      }
      );
      periodoSvc.getPeriodicidad($scope.facturacion.periodo).then(function(data){
        $scope.datos.periodo=data;
      }
      );


    });*/


    
      $scope.facturacion = {};
      facturacionSvc.get({id:1},function(datos){
        $scope.facturacion = datos;
        
      });
  	
  }]);

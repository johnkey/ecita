'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaFacturacionEditarCtrl
 * @description
 * # EmpresaFacturacionEditarCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaFacturacionEditarCtrl', ['$scope','$state','$resource','GLOBAL_CONFIG', 'toastr','modosPagoSvc','tiposTarjetaSvc','FacturacionSvc', function ($scope,$state,$resource,globalConfig,toastr,modosPagoSvc,tiposTarjetaSvc,facturacionSvc) {
    

  	/*var ref = new Firebase('https://e-cita.firebaseio.com/cuentas/-JxEVYVSUURothTJ7zDu');
  	$scope.facturacion = $firebaseObject(ref.child('datosFacturacion'));
  	

  	$scope.facturacion.$loaded().then(function() {
  		
  	  	
	  	$scope.selectPagos = {};
	  	modosPagoSvc.listModosPago().then(function(data){
	  			$scope.selectPagos=data;
		  	}
	  	);
	  	$scope.selectTarjetas = {};
	  	tiposTarjetaSvc.listTiposTarjeta().then(function(data){
	  			$scope.selectTarjetas=data;
		  		}
	  	);

	  	$scope.periodo = {};
      periodoSvc.getPeriodicidad($scope.facturacion.periodo).then(function(data){

          $scope.periodo=data.nombre;

      });
  	
  	});
  	
  	$scope.guardar=function(){
      $scope.facturacion.$save().catch(function(error){
          if (error) {
            toastr.error('No se ha podido al actualizar. Revise los datos.','Error');
            
          }
        });
        
        toastr.success('Datos actualizados correctamente','Bien!!!');
        $state.go('contrato.facturacion.detalle');
    };*/

    $scope.selectPagos = {};
      modosPagoSvc.listModosPago().then(function(data){
          $scope.selectPagos=data;
        }
    );

    $scope.selectTarjetas = {};
      tiposTarjetaSvc.listTiposTarjeta().then(function(data){
          $scope.selectTarjetas=data;
          }
    );
  	

    //var factResource = $resource(globalConfig.api + '/facturacion/:id');
    $scope.facturacion = {};
    facturacionSvc.get({id:1},function(datos){
        $scope.facturacion = datos;
        
    });

    
    $scope.guardar = function(){
      
        $scope.facturacion.$save(function(){
            
            toastr.success('Datos actualizados correctamente','Bien!!!');
            $state.go('contrato.facturacion.detalle');
        },function(error){
         
            toastr.error('No se ha podido al actualizar. Revise los datos.','Error');
            $scope.errorMessages=error.data;
           

        });
        
      };
  	

  }]);

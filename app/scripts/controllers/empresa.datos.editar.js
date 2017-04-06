'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaDatosEditarCtrl
 * @description
 * # EmpresaDatosEditarCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaDatosEditarCtrl',['$scope','$state','$resource', 'toastr','GLOBAL_CONFIG','MisDatosSvc', function ($scope,$state,$resource,toastr,globalConfig,misDatosSvc) {
   
   		/*var ref = new Firebase('https://e-cita.firebaseio.com/cuentas/-JxEVYVSUURothTJ7zDu');
   		
   		$scope.datos = $firebaseObject(ref);
   		$scope.contactos = $firebaseArray(ref.child('contactos'));

   		$scope.direccion='';
   		$scope.detalle='';
   		$scope.$watch('detalle',function(newValue){
   			
   			if (newValue.address_components){
   				$scope.datos.ciudad= newValue.address_components[0].long_name;
   				$scope.datos.provincia= newValue.address_components[3].long_name;
   				$scope.datos.pais= newValue.address_components[5].long_name;
   				
   		    }


   		});

  		$scope.guardar = function(){

  			$scope.datos.$save().catch(function(error){
  				if (error) {
  					toastr.error('No se ha podido al actualizar. Revise los datos.','Error');
  					
  				}
  			});
  			
  			$scope.contactos.$save(0);
  			toastr.success('Datos actualizados correctamente','Bien!!!');
  			$state.go('contrato.datos.detalle');
  		};*/

      $scope.errorMessages={};

      var MisDatos = $resource(globalConfig.host  + globalConfig.api + '/misdatos/:id');
      $scope.datos = {};
      misDatosSvc.get({id:1},function(data){
        $scope.datos = data;



      });

      /*$scope.$watch('goggle_place',function(newValue){
        
            if (newValue.address_components){
              $scope.datos.localidad= newValue.address_components[0].long_name;
              $scope.datos.provincia= newValue.address_components[3].long_name;
              $scope.datos.pais= newValue.address_components[5].long_name;
              
            }


        });*/

      $scope.guardar = function(){
      
        $scope.datos.$save(function(){
            
            toastr.success('Datos actualizados correctamente','Bien!!!');
            $state.go('contrato.datos.detalle');
        },function(error){
         
            toastr.error('No se ha podido al actualizar. Revise los datos.','Error');
            $scope.errorMessages=error.data;

        });
        
      };


  }]);

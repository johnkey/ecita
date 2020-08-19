'use strict';

/**
 * @ngdoc function
 * @name ecitaApp.controller:EmpresaDatosCtrl
 * @description
 * # EmpresaDatosCtrl
 * Controller of the ecitaApp
 */
angular.module('ecitaApp')
  .controller('EmpresaDatosCtrl',['$scope','GLOBAL_CONFIG','FirebaseService','toastr', function ($scope,globalConfig,firebaseService,toastr) {
   
      // var auth = $firebaseAuth();

      // // login with Facebook
      // auth.$signInWithPopup("google").then(function(firebaseUser) {
      //   console.log("Signed in as:", firebaseUser.uid);
      // }).catch(function(error) {
      //   console.log("Authentication failed:", error);
      // });

   	  // 	var ref = new Firebase('https://ecita-a59e1.firebaseio.com/clientes');
  		// $scope.detalle = $firebaseObject(ref);
      //$scope.detalle={nombre:'a',apellidos:'b'};
      firebaseService.get('clientes','twHOlovDgvwF8PdzJm48').then(function(doc) {
            if (angular.isDefined(doc)){
                $scope.detalle = doc;
            }else{
                toastr.error('No se han podido obtener los datos.','Error');
            }            
      }).catch(function(error) {
          toastr.error('No se han podido obtener los datos.','Error');
          $scope.errorMessages=error.data;
      });
  		//$scope.contactos = $firebaseArray(ref.child('contactos'));
  }]);
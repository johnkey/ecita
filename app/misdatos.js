'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.MisDatos
 * @description
 * # MisDatos
 * Factory in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('MisDatosSvc', ['BackendlessService',function (backendlessService) {
    
  	var db = firebase.firestore().collection("clientes");

  	this.get = function (table,id){
      return backendlessService.get('clientes',id);
    }



  	return this;
}]);

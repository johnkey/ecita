'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.MisDatos
 * @description
 * # MisDatos
 * Factory in the ecitaApp.
 */
angular.module('ecitaApp')
  .factory('MisDatosSvc', ['$q','GLOBAL_CONFIG',function ($q,globalConfig) {
    
  	var db = firebase.firestore().collection("clientes");

  	this.get = function(id){
  		var deferred = $q.defer();
  		
  		 var datos = db.doc(id);
	     datos.get().then(function(doc) {
	            deferred.resolve(doc.data());  
	      }).catch(function(error) {
	          console.log("Error getting cached document:", error);
	      });

  		return deferred.promise;
  	};

  	return this;
}]);

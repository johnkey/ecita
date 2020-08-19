'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.FirebaseService
 * @description
 * # FirebaseService
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('FirebaseService',['$q', function ($q) {
    	
    	var fs = firebase.firestore();

	  	this.get = function(collection,id){
	  		var db = fs.collection(collection);
	  		
	  		var deferred = $q.defer();
	  		
	  		var datos = db.doc(id);
		    datos.get().then(function(doc) {
		            deferred.resolve(doc.data());  
		      }).catch(function(error) {
		          console.log("Error getting cached document:", error);
		      });

	  		return deferred.promise;
	  	};


}]);

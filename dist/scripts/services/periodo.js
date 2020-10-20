'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.periodo
 * @description
 * # periodo
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('periodoSvc',['$q', function ($q) {
    
  	var ref = new Firebase('https://e-cita.firebaseio.com/periodicidad');

  	this.getPeriodicidad = function(p){
  		var deferred = $q.defer();
  		ref.child(p).once('value',function (snap) {
  		
  				deferred.resolve(snap.val()); 
  				
  			}
  		);
  		

  		return deferred.promise;
  	};

     this.listPeriodicidad = function(){
      var deferred = $q.defer();
      ref.once('value',function (snap) {
          deferred.resolve(snap.val()); 
        }
      );

      return deferred.promise;
    };



  }]);

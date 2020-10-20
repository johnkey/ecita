'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.modosPago
 * @description
 * # modosPago
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('modosPagoSvc',['$q','$resource','GLOBAL_CONFIG', function ($q,$resource,globalConfig) {
    
  	
    var modoPagoResource = $resource(globalConfig.host + globalConfig.api + '/modospago');
      

  	this.getModoPago = function(modo){
  		var deferred = $q.defer();
  		

  		return deferred.promise;
  	};

    this.listModosPago = function(){
      var deferred = $q.defer();
      
      modoPagoResource.query(function(datos){
        deferred.resolve(datos); 
      });

      return deferred.promise;
    };

  	
  }]);

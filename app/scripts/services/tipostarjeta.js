'use strict';

/**
 * @ngdoc service
 * @name ecitaApp.tiposTarjeta
 * @description
 * # tiposTarjeta
 * Service in the ecitaApp.
 */
angular.module('ecitaApp')
  .service('tiposTarjetaSvc',['$q','$resource','GLOBAL_CONFIG', function ($q,$resource,globalConfig) {
    
  	var tipoTarjetaResource = $resource(globalConfig.host + globalConfig.api +'/tipostarjeta');

  	this.getTipoTarjeta = function(tipo){
  		var deferred = $q.defer();
  		

  		return deferred.promise;
  	};

  	this.listTiposTarjeta = function(){
  		var deferred = $q.defer();
      
      tipoTarjetaResource.query(function(datos){
        deferred.resolve(datos); 
      });

      return deferred.promise;
  	};

  	
  }]);


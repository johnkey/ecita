'use strict';

/**
 * @ngdoc directive
 * @name ecitaApp.directive:ecAutocomplete
 * @description
 * # ecAutocomplete
 */
angular.module('ecitaApp')
  .directive('ecAutocomplete',['$compile', function ($compile) {

  	function isGooglePlace(place) {
		if (!place)
			return false;
		return !!place.place_id;
	}

	function isContainTypes(place, types) {
		var placeTypes,
			placeType,
			type;
		if (!isGooglePlace(place))
			return false;
		placeTypes = place.types;
		for (var i = 0; i < types.length; i++) {
			type = types[i];
			for (var j = 0; j < placeTypes.length; j++) {
				placeType = placeTypes[j];
				if (placeType === type) {
					return true;
				}
			}
		}
		return false;
	}

  	function getCity(place) {
		var COMPONENT_TEMPLATE = { locality: 'long_name' },
			city = getAddrComponent(place, COMPONENT_TEMPLATE);
		return city;
	}

	function getState(place) {
		var COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
			state = getAddrComponent(place, COMPONENT_TEMPLATE);
		return state;
	}

	function getPostCode(place) {
		var COMPONENT_TEMPLATE = { postal_code: 'long_name' },
			postCode = getAddrComponent(place, COMPONENT_TEMPLATE);
		return postCode;
	}

	function getCountry(place) {
		var COMPONENT_TEMPLATE = { country: 'long_name' },
			country = getAddrComponent(place, COMPONENT_TEMPLATE);
		return country;
	}

	function getAddrComponent(place, componentTemplate) {
		var result;
		if (!isGooglePlace(place))
			return;
		for (var i = 0; i < place.address_components.length; i++) {
			var addressType = place.address_components[i].types[0];
			if (componentTemplate[addressType]) {
				result = place.address_components[i][componentTemplate[addressType]];
				return result;
			}
		}
		return;
	}

    return {
      restrict: 'AE',
      require:'ecInput',
      transclude:true,
      link: function postLink(scope, element, attrs) {
        
        	var input = element.children().find('input');
      		input.attr('ng-autocomplete','');
      		input.attr('details','google_places');

      		
      		scope.options = {
		      country: 'es',
		      types: attrs.ecAutocomplete
		    },
		    input.attr('options','options');

      		$compile(input)(scope);

      		scope.$watch('google_places',function(newValue){
        
	            if (angular.isDefined(newValue.address_components)){
	              scope.localidad=getCity(newValue);
	              scope.provincia= getState(newValue);
	              scope.pais= getCountry();
	              scope.cp= getPostCode();
	            }


	        });


      		

      }
    };
 }]);

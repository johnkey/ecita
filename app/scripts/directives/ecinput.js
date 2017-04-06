'use strict';

/**
 * @ngdoc directive
 * @name ecitaApp.directive:ecInput
 * @description
 * # ecInput
 */
angular.module('ecitaApp')
  .directive('ecInput',[ function () {
    

                  //FUNCIONES DE VALIDACIÓN DE DNI
                  function validDni(dni) {
                      var chararter = dni.substr(8),
                          dniNumber = dni.substr(0, 8),
                          lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
                      return angular.uppercase(chararter) === lockup.charAt(dniNumber % 23);
                  }

                  function validNie() {
                      // var firstChararter = nie.substr(0, 0),
                      //     lastChararter = nie.substr(8),
                      //     nieNumber = nie.substr(0, 8);
                      return true; // esperando validacion
                  }

                  function validFormat(text) {

                      if (text === undefined || text === null) {
                          return false;
                      }
                      if (text.match(/^\d{8}[a-zA-Z]$/)) {
                          return validDni(text);
                      }
                      if (text.match(/^[a-zA-Z]\d{7}[a-zA-Z]$/)) {
                          //return 'NIE';
                          return validNie(text);
                      } else {
                          return false; //return 'FORMAT ERROR';
                      }
                  }


    return {
      templateUrl: 'views/tpl/ec-input.html', 
      restrict: 'E',
      require: ['^?form','?ngModel'],
      scope: {
      	label: '@',
      	name: '@',
      	//serverErrorMessages: '=',
      	//isError: '@errorCondition',
      	//requiredCondition: '=',
      	min: '@ngMinlength',
      	max: '@ngMaxlength',
      	inputModel:'=ngModel',
      	type:'@',
      	isRequired:'@ngRequired',
            placeholder: '@'
      },
      controller:['$scope',function(scope){
      		scope.cleanErrors = function(){
       			delete scope.errors.server;
       		}
      }],
      link: function postLink(scope, element, attrs,ctrls) {
      		
      		
       		var formCtrl = ctrls[0],
                        ngModelCtrl = ctrls[1],
       			formName = formCtrl ? formCtrl.$name : undefined,
       			elementName = attrs.name;


       		scope.errors=[];
       		scope.errorMessages = {
       			'required': 'El campo es obligatorio',
       			'maxlength': 'El campo es demasiado largo',
       			'minlength': 'El campo es demasiado corto',
       			'email':'Formato de mail inválido',
                        'dni':'Formato dni inválido'
       		};
       		


       		function setErrorIcon(){
       			angular.element('input#'+attrs.name).after('<i class="fa fa-warning"></i>');
       		}
       		function deleteErrorIcon(){
       			angular.element('input#'+attrs.name+'+ i').remove();
       		}
       		
       		

       		
       		scope.$watchCollection(function(){
       			return formCtrl[elementName].$error;
       		},function(newValue){
       			 if(angular.isDefined(newValue)){
       			 	scope.errors= newValue;
       			 	angular.forEach(newValue,function(value,key){
       			 		if(key!=='server'){
       			 			scope.errors[key] = scope.errorMessages[key];	
       			 		}
       			 	});
       			 };

       		});

       		scope.$watch(function(){
       			return formCtrl[elementName].$invalid;
       		},function(newValue){
       			 scope.isError = newValue;
       			 if (scope.isError){
       			 	setErrorIcon();
       			 	//formCtrl.$setValidity(elementName,false);
       			 }else{
       			 	deleteErrorIcon();
       			 	//formCtrl.$setValidity(elementName,true);
       			 }
       		});


       		if(angular.isUndefined(attrs.type) || attrs.type===null){
       			attrs.type='text';
       		}else if (attrs.type==='email'){
       			angular.element('input#'+attrs.name).prepend('<span class="input-group-addon"><i class="fa fa-envelope"></i></span>');
       		}else if (attrs.type==='dni'){
                        formCtrl[elementName].$validators.dni=function(modelValue,viewValue){
                              var valid = validFormat(modelValue);
                              formCtrl[elementName].$setValidity(elementName,valid);
                              return valid;
                        }
                  }
  		
      }
    };
  }]);

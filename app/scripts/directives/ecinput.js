'use strict';

/**
 * @ngdoc directive
 * @name ecitaApp.directive:ecInput
 * @description
 * # ecInput
 */
angular.module('ecitaApp')
  .directive('ecInput',[ function () {
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
      	isRequired:'@ngRequired'
      },
      controller:['$scope',function(scope){
      		scope.cleanErrors = function(){
       			delete scope.errors.server;
       		}
      }],
      link: function postLink(scope, element, attrs,ctrls) {
      		
      		
       		var formCtrl = ctrls[0],
       			formName = formCtrl ? formCtrl.$name : undefined,
       			elementName = attrs.name;


       		scope.errors=[];
       		scope.errorMessages = {
       			'required': 'El campo es obligatorio',
       			'maxlength': 'El campo es demasiado largo',
       			'minlength': 'El campo es demasiado corto',
       			'email':'Formato de mail inválido'
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
       		}



       		
       		
      }
    };
  }]);

(function(angular){
	'use strict';

	angular.module('sisgac.modules.auth.controllers', [])
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(){
		/*jshint validthis: true */
		var vm = this;
		
		vm.title = 'SYSGD - Login';
	}

})(angular);
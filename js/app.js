(function(angular){
	'use strict';

	angular.module('sisgac', [
		'sisgac.controllers',
		'sisgac.directives',
		'sisgac.filters',
		'sisgac.services',
		'ui.router',
		'ui.bootstrap',
		'ui.mask'
	])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');

    $stateProvider
	    .state('error', {
	      url: '/error',
	      templateUrl: 'partials/error/error.404.html'
	    })
	    .state('root', {
	      url: '',
	      templateUrl: 'partials/login/login.html',
	      controller: 'loginCtrl',
	      controllerAs: 'vm'
	    })
	    .state('home', {
	      url: '',
	      templateUrl: 'partials/home/home.html'
	  	})
	  	.state('home.tasks', {
	      url: '/tasks',
	      templateUrl: 'partials/tasks/tasks.list.html'
	  	});
  }]);

})(angular);
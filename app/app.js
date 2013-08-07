var app = angular.module('movieDepot',[]);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/movies',{
			controller: 'MoviesController',
			templateUrl: 'views/movies.html'
		})
		.when('/actors',{
			controller: 'ActorsController',
			templateUrl: 'views/actors.html'
		})
		.otherwise({redirectTo:'/movies'});
});
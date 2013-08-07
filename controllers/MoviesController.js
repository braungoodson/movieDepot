app.controller('MoviesController',function ($scope,movieFactory) {
	$scope.movies = [];
	init();
	function init () {
		$scope.movies = movieFactory.getMovies();
	}
});
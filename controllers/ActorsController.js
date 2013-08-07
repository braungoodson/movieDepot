app.controller('ActorsController',function ($scope,actorFactory) {
	$scope.actors = [];
	init();
	function init () {
		$scope.actors = actorFactory.getActors();
	}
});
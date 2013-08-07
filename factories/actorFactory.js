app.factory('actorFactory', function () {
	var factory = {};
	var actors = [
		{name:"Arnold Schwarzenegger",movies:['Predator']}
	];
	factory.getActors = function () {
		return actors;
	}
	return factory;
});
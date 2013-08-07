app.factory('movieFactory', function () {
	var factory = {};
	var movies = [
		{title:"Predator",releaseDate:"2000",rated:"R",genre:"action"},
		{title:"Alhpy Goes Home",releaseDate:"2001",rated:"PG-13",genre:"sci-fi"},
		{title:"Ants'R'Us",releaseDate:"2003",rated:"G",genre:"drama"},
		{title:"Candy Cane",releaseDate:"2000",rated:"R",genre:"action"},
		{title:"The Big Apple",releaseDate:"2001",rated:"PG-13",genre:"sci-fi"},
		{title:"Centorion",releaseDate:"2003",rated:"G",genre:"drama"}
	];
	factory.getMovies = function () {
		return movies;
	}
	return factory;
});
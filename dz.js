"use strict";

let numberOfFilms;
while (true) {
  numberOfFilms = +prompt("neçə filmə baxmısız?", "");
  if (!numberOfFilms || isNaN(numberOfFilms)) {
    continue;
  } else {
    break;
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const movies = {};
let filmName;
let filmRating;
while (true) {
  filmName = prompt("film name?", "");
  if (!filmName || filmName.length > 50) {
	console.log("error");
    continue;
  }
  filmRating = +prompt("film rating?", "");
  if (!filmRating) {
	console.log("error");
    continue;
  }

  movies.filmName = filmName;
  movies.fimrating = filmRating;
  break;
}

personalMovieDB.movies = movies;

let count = personalMovieDB.count;
if(count<=10){
	alert("siz çox az filmə baxmısınız!");
}else if(count>=10 && count <=30){
	alert("Siz klassik film izləyicisisiniz!")
}else if(count>30){
	alert("siz kinomanyaksınız!")
}else{
	alert("Nəsə səhvlik var");
}

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);

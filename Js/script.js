const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {

count: numberOffilms,
movies: {},
actors: {},
genres: [],
privat: false

};

const a = prompt('Last movie', ''),
      b = prompt('rate', ''),
      c = prompt('Last movie', ''),
      d = prompt('rate', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
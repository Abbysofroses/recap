const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {

count: numberOffilms,
movies: {},
actors: {},
genres: [],
privat: false

};

for (let i = 0; i < 2; i++) {
    const a = prompt('Last movie', ''),
          b = prompt('rate', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
} 

if (personalMovieDB.count < 10) {
    console.log('not enogh movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('u a tipical viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('u a maniac');
} else {
    console.log('ooops');
} 


console.log(personalMovieDB);
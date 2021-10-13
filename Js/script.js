let numberOffilms;

function start () {
    numberOffilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
        numberOffilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {

count: numberOffilms,
movies: {},
actors: {},
genres: [],
privat: false

};

function rememberMe () {
    
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
}

/* rememberMe(); */

function detectLevel () {

    if (personalMovieDB.count < 10) {
        console.log('not enogh movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('u a tipical viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('u a maniac');
    } else {
        console.log('ooops');
    } 
}

/* detectLevel(); */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writrUrGenres() {
   for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`urFavorite number ${i}`);
   }
}

writrUrGenres(); 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) 
            {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
            }
    },
    rememberMe: function() {
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
    },
    detectLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('not enogh movies');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('u a tipical viewer');
            } else if (personalMovieDB.count >= 30) {
                console.log('u a maniac');
            } else {
                console.log('ooops');
            } 
    },
    showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
    },
    toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
    },
    writeUrGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`urFavorite number ${i}`);

             if (genre === '' || genre === null) {
                 console.log('wrong data');
                 i--;
             } else {
                 personalMovieDB.genres[i - 1] = genre;
             }

            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`favorite genre ${i + 1} is ${item}`);
            });

    }     
};
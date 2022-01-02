"use strict";
let numberOfFilms;

let a = 15;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }
};
personalMovieDB.showMyDB();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренних фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла Ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}



const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(` Ваш любимый жанр под номером ${i}`, "");

    }

};
writeYourGenres();

for (let key in personalMovieDB) {
    if (typeof (personalMovieDB[key]) === "object") {
        for (let i in personalMovieDB[key]) {
            console.log(`Свойство ${i} имеет значение ${personalMovieDB[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${personalMovieDB[key]}`);
    }

}
console.log(Object.keys(personalMovieDB).length);
// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренних фильмов?", "")
//           b = prompt("На сколько оцените его?", "");
//           i++;
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// 


// let i = 0;
// do {
//     const a = prompt("Один из последних просмотренних фильмов?", "")
//     b = prompt("На сколько оцените его?", "");
//     i++;
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }
// while (i < 2);
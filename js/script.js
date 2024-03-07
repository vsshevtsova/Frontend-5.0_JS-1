// ▸ Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?'
// ▸ Создать объект personalMovieDB и в него поместить такие свойства:
// - count - сюда передается ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - тоже поместить пустой объект
// - genres - сюда поместить пустой массив
// - privat - в это свойство поместить boolean(логическое) значение false
// ▸ Задайте пользователю по два раза вопросы:
// - 'Один из последних просмотренных фильмов?'
// - 'На сколько оцените его?'

// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
// movies:{
// 'logan': '8.1'
// }

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: [],
  genres: false,
};

let film = prompt("Один из последних просмотренных фильмов?", " ");
let rate = +prompt("На сколько оцените его?", " ");

personalMovieDB.movies[film] = rate;
console.log(personalMovieDB);

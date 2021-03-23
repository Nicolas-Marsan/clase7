// MODULO PROPIO
let calculadora =require(__dirname + '/calculadora');
// MODULO DE TERCEROS
let movieQuotes =require ('popular-movie-quotes');
// MODULO NATIVO
let fs = require('fs');

console.log(fs.readFileSync(__dirname + '/texto.txt','utf-8'));
//nsole.log(calculadora.sumar(5,5));

//console.log(movieQuotes.getSomeRandom(10));

//control + k
//control + c
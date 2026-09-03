// Calculez :

const { waitForDebugger } = require('node:inspector/promises');

// Le score total
// Le score moyen
// Exemple :

// Partie 1 : 15
// Partie 2 : 12
// Partie 3 : 18
// Partie 4 : 15

// Score total : 60
// Moyenne : 15

 

var prompt = require('prompt-sync')();

let score1 = Number(prompt("Score partie 1 : "));
let score2 = Number(prompt("Score partie 2 : "));
let score3 = Number(prompt("Score partie 3 : "));
let score4 = Number(prompt("Score partie 4 : "));

let total = score1 + score2 + score3 + score4;
let moyenne = total / 4;

console.log("Score total :", total);
console.log("Moyenne :", moyenne);
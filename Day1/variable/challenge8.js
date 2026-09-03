// La tension en volts U
// L’intensité en ampères I
// Le temps en heurest
// Calculez l’énergie consommée.

// Formule :

// Énergie = U * I * t
// Exemple :

// Tension : 12 V
// Intensité : 2 A
// Temps : 3 heures

// Énergie : 72 Wh

var prompt = require('prompt-sync')();
let Tension= Number(prompt("La tension en volts U: "));
let Intensite = Number(prompt("L’intensité en ampères I:"));
let Temps= Number(prompt("Le temps en heurest : ",));


let Energie = Tension * Intensite* Temps ;

console.log("Énergie : " , Energie);
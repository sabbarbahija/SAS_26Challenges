// // Formule :

// Note finale =
// (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10
// Exemple :

// Contrôle continu : 14
// Projet : 16
// Examen : 12

// Note finale : 13.8

var prompt = require('prompt-sync')();
let NoteCc= Number(prompt("Contrôle continu : "));
let NoteProjet = Number(prompt("Projet :"));
let NoteExamen= Number(prompt("Examen : "));
let total = (NoteCc * 2 + NoteProjet * 3 + NoteExamen * 5) / 10;
console.log("Note finale :" , total);
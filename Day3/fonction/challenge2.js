// ### Challenge 2 : Calculateur d'Âge Canin
// * **Objectif :** Créer une fonction avec un paramètre simple.
// * **Consigne :** Écrivez une fonction `calculerAgeChien` qui prend un paramètre
//  `ageHumain` (un nombre). La fonction doit calculer et retourner l'âge équivalent du 
// chien (sachant qu'1 an humain ≈ 7 ans de chien).
// * **Exemple :** `calculerAgeChien(4)` doit retourner `28`.
// * **Notions :** Paramètre, opérations arithmétiques, instruction `return`.
let prompt = require('prompt-sync')();
let age = Number(prompt('entrez un nombre'));
function calculerAgeChien(ageHumain) {
    return ageHumain * 7;
}
console.log(calculerAgeChien(age));

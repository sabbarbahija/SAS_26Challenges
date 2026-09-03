// hallenge 3 : Générateur d'Email Professionnel
// Objectif : Utiliser une fonction avec plusieurs paramètres.
// Consigne : Écrivez une fonction genererEmail qui prend deux paramètres 
// : prenom et nom. La fonction doit retourner une adresse email sous 
// la forme : prenom.nom@entreprise.com (tout en minuscules).
// Exemple : genererEmail("Tayeb", "Souini")
//  ➔ "tayeb.souini@entreprise.com".
// Notions : Multiples paramètres, concaténation ou Template 
// Literals (`), méthode .toLowerCase().


let prompt = require('prompt-sync')();
function  genererEmail(prenom , nom) {
return `${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com`;
}
console.log(genererEmail("bahija", "Sabbar"));



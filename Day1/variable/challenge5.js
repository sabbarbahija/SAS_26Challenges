// Moins de 60 minutes → Court métrage
// De 60 à 120 minutes → Film standard
// Plus de 120 minutes → Film long
// Exemple :

// Durée : 95 minutes

// Catégorie : Film standard
 let Duree;
 const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 
 rl.question('entre la durée du film en minutes ', (Duree) => {
if(Duree < 60 ) {
    console.log("Catégorie:Court métrage")
} else if (Duree >=60 || Duree < 120  ){
    console.log("Catégorie:Film standard")
} else {
    console.log("Catégorie: Film long" )
}

 rl.close();
 });
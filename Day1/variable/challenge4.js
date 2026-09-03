
// Formule :

// Consommation = (litres / kilomètres) * 100
// Exemple :

// Distance : 500 km
// Carburant : 35 litres

// Consommation : 7 L/100 km

let Distance;
let Carburant;
let Consommation;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('La distance parcourue en kilomètres', (Distance) => {
    rl.question('La quantité de carburant consommée en litres', (Carburant) => {
Distance=Number(Distance);
Carburant=Number(Carburant);

Consommation = (Carburant / Distance) * 100;
console.log("la consommation moyenne en litres / 100 km:" + Consommation);
rl.close();
});
});
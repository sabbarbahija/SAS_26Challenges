  
//   Formule :

// Distance = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
// Exemple :

// Position A : (1, 2, 3)
// Position B : (4, 6, 3)

// Distance : 5


  var prompt = require('prompt-sync')();

let x1 = Number(prompt("x1 : "));
let y1 = Number(prompt("y1 : "));
let z1 = Number(prompt("z1 : "));

let x2 = Number(prompt("x2 : "));
let y2 = Number(prompt("y2 : "));
let z2 = Number(prompt("z2 : "));

let dx = x2 - x1;
let dy = y2 - y1;
let dz = z2 - z1;

let distance = (dx * dx + dy * dy + dz * dz)**(1/2);

console.log("Distance :", distance);
// challenge2

let MontantEnEur;
let MontantEnMad;
// Import the module
const readline = require('readline');

// Use the Methods Methods
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('entre le montant en MAD ', (MontantEnMad) => {
MontantEnMad=Number(MontantEnMad);
MontantEnEur=MontantEnMad/11;
console.log("le montant en EUR est:" + MontantEnEur);
rl.close();
});



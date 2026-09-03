// Formule :

// MB = GB * 1024
// Exemple :

// Stockage : 10 GB

// Résultat : 10240 MB


 let MB;
 let GB;
// Import the module
const readline = require('readline');

// Use the Methods Methods
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('entre une capacité exprimée en Gigaoctets', (GB) => {
GB=Number(GB);
MB = GB * 1024;
console.log("la capacité en Mégaoctets (MB) est:" + MB);
rl.close();
});

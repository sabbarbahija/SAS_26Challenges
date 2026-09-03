// Challenge 6 : Validateur de Mot de Passe

function verifierMotDePasse(motDePasse) {
    if (motDePasse.length > 8 && motDePasse.includes("@")) {
        console.log('true')
    } else {
        console.log('faLse');
    }
}
let prompt = require('prompt-sync')();
let mot = (prompt('entrez le mot de passe :'));
verifierMotDePasse(mot);


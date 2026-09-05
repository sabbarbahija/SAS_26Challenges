//  Challenge 7 : Remplacement Manuel d'un Caractère

function remplacerCaractere(chaine, ancien, nouveau) {
    let res = "";
    for (let c of chaine) {
        if (c === ancien) {

            res += nouveau;
        } else {
            res += c
        }

    }
    return res;
}
let n;
n = remplacerCaractere("dfgstarz", "f", "o");
console.log(n);
// Défi 10 : Le Pipeline de Transformation de Texte
function nettoyerEspaces(texte) {
    return texte.trim();
}
function mettreEnMajuscule(texte) {
    return texte.toUpperCase();
}
function ajouterPrefixe(texte, prefixe = "LOG:") {
    return prefixe + texte;
}
function traiterMessage(texte, ...transformations) {
    let res = texte;
    for (let n of transformations) {
        res = n(res);
    }
    return res;
}
console.log(
    traiterMessage(
        "   bonjour   ",
        nettoyerEspaces,
        mettreEnMajuscule,
        ajouterPrefixe
    )
);


// Challenge 8 : Supprimer les Doublons Manuellement
function supprimerDoublons(tab) {
    let t =[];
    for (let i = 0; i < tab.length; i++) {
        let x = 0;
        for (let j = 0; j < t.length; j++) {
            if (tab[i] === t[j]){
            x = 1;
        }}
        if (x === 0) {
            t[t.length] = tab[i];

        }

    }
    return t;
}
console.log(supprimerDoublons([1, 3, 1, 5, 3]));
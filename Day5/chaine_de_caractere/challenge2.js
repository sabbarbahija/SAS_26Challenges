// Défi 2 : Compteur d'Occurrences d'un Caractère
function compterLettre(chaine, lettre){
        let count=0;
    for(let c of chaine){
        if(c=== lettre){
        count++;
    }}
    return count;
 }
  let n;
 n=compterLettre("bahija" ,"a");
 console.log(n);
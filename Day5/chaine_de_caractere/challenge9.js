// Challenge 9 : Suppression des Espaces Extérieurs (Simulation de trim)
function nettoyerEspaces(chaine){
    let debut=0;
    let fin=chaine.length-1;
    while(debut<= fin && chaine[debut]===" "){
debut++;
    }
     while (fin >= debut && chaine[fin] === " ") {
        fin--;
    }
        let res= "";
    for (let i = debut; i <= fin; i++) {
        res += chaine[i]; 
    }

    return res;
}
console.log(nettoyerEspaces("   hello world   "));
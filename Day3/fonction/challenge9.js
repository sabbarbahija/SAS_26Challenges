// Challenge 9 : Générateur de Compteur Indépendant (Closure)
function creerCompteur(valeurInitiale =0){
    let val=valeurInitiale;
    return  function (){
        val++;
        return val;
    };
}
const MonCompteur = creerCompteur(10);
 console.log(MonCompteur());
 console.log(MonCompteur());

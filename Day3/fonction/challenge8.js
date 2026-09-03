// Challenge 8 : Convertisseur Universel de Devises avec Callback
  function formatMAD(val){
    return val+"DH";
}  

function convertirMontant(montant,taux ,formatter){
    let r= montant * taux;
    
return formatMAD(r);

}
let prompt = require('prompt-sync')();
let mot = convertirMontant(100,5,formatMAD);
console.log(mot);


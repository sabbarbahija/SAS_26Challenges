// Défi 2 : Calculateur de Somme 
//  let  prompt=require('prompt-sync')();
// let taille=Number(prompt('entrez la taille de table :'));
// let array2[];
// let s=0;
//  for(let i=0;i<taille ;i++){
// array2[i]=Number(prompt('entrez les nombre :',(i+1)));
// s+=array2[i];

// }
// console.log('la somme est :',s);
// console.log(array2);


function calculerSomme(tab){
    let s=0;
    for(let i=0;i<tab.length ;i++){
        s=s+tab[i];
    }
    return s;
}
let t=[1,2,3];
let somme=calculerSomme(t);
 console.log(somme);
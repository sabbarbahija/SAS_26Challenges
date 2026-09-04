// Défi 3 : Recherche du Maximum
//  let  prompt=require('prompt-sync')();
// let taille=Number(prompt('entrez la taille de table :'));
// let array2=[];

//  for(let i=0;i<taille ;i++){
// array2[i]=Number(prompt(`Entrez le nombre ${i + 1} : `));
// }
// let max= array2[0];
//  for(let i=1 ;i<taille ;i++){
// if(array2[i]> max){
//     max =array2[i];
// }}
// console.log('le max est :',max);
// console.log(array2);

function trouverMax(tab) {
    let max = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    return max;

}
function min(tab){
    let min=tab[0];
    for(let i=0;i<tab.length; i++){

        if(min>tab[i]){
            min =tab[i];
        }

    }
    return min;
}


let t=[1,12,3];
let max=trouverMax(t);
let mi=min(t);
 console.log(max);
 console.log(mi);


 //instalation et affichage:


//  let  prompt=require('prompt-sync')();
//  let array=[1,2,3,4];
//  for(let i=0;i<array.length ;i++){
//      console.log(array[i]);
// }
// saisie et affichage des élément:
// let  prompt=require('prompt-sync')();
// let n=Number(prompt('entrez la taille de table :'));
// let array1[];
//  for(let i=0;i<n ;i++){
// array1[i]=Number(prompt('entrez les nombre :',(i+1)));
// }
// console.log(array1);

function afficherElements(tab){
    for(let i=0;i<tab.length ;i++){
          console.log(tab[i]);
    }
}
let t=[1,2,3];
afficherElements(t); 

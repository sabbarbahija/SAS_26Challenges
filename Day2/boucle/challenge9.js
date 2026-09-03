let prompt=require('prompt-sync')();
let B=Number(prompt('Base :   '));
let N=Number(prompt('Exposant :   '));
 let R =1;
while(N >0){
 R=R*B;
 N--;

}
console.log('Résultat : ',R);
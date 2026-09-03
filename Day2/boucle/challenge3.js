let prompt=require('prompt-sync')();
let num=Number(prompt(' N = '));
let S=0;
for(let i=1; i<=num ;i++){
    S=S+i;
  
}
console.log('la somme est :',S);
let prompt=require('prompt-sync')();
let N=Number(prompt('Nombre de missions :   '));
  let i=1;
while(i<=N){
     console.log('Mission', i ,' → Score :',i*100);
    i++;
 }
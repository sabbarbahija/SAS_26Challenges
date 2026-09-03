let prompt=require('prompt-sync')();
let N=Number(prompt('N =  '));
let X=Number(prompt('X=  '));
 let m;
for(let i=1 ; i<= N ;i++){
    
      m= i*X ;
console.log(i,'*', X ,'=',m);
if(m === N){
    break;
}
}
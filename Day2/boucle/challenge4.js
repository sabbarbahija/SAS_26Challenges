let prompt=require('prompt-sync')();
let num=Number(prompt(' Nombre :  '));
let mult;
for(let i=1 ; i<= 10 ;i++){
    mult= i*num ;
console.log(i,'*', num ,'=',mult);

}
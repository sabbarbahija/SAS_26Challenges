let prompt =require('prompt-sync')();
let num=Number(prompt(' N = '));
for(let i=1; i<=num ;i++){
    if(i % 2 ==0){
        console.log(i);
    }
}
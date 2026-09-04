// défi 6 : Duplication de Chaîne (Simulation de repeat)
function repeterChaine(chaine, fois){
 let res ="";
     for(let i=0;i<fois ;i++){
        res+=chaine;
        
}
return res;
}
let n=repeterChaine("kayak" ,3);
 console.log(n);
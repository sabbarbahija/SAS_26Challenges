// Challenge 10 : Découpage Manuel en Mots (Simulation de split(' '))

function  separerMots(chaine){
    let res=[];
    let mot="";
    for(let i=0 ;i< chaine.length   ;i++){
        if(chaine[i] !==" "){
        mot +=chaine[i];
        }
        else if(mot !== " "){
            res[res.length]=mot;
            mot=" ";
        }
    }
     if(mot !==" "){
           res[res.length]=mot;
    }
     return res;
}
console.log(separerMots("Apprendre le JavaScript"));

// Challenge 8 : Extraction Manuelle de Sous-chaîne (Simulation de slice)
 function  extraireChaine(chaine, debut, fin){
    let res="";
    for(let i=debut;i<=fin ;i++){
        res+=chaine[i];
    }
    return res;
 }
 let n = extraireChaine("dfgstarz", 2, 6);
console.log(n);
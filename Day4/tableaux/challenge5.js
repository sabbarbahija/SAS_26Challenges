// Défi 5 : Recherche d'Élément (Simulation de includes)
function contientElement(tab, valeur){
     for(let i=0;i<tab.length; i++){
       if (tab[i]===valeur){
        return true;
       }
           }
return false;
 
}

let t=[1,12,3];
let res=contientElement(t,4);

 console.log(res);

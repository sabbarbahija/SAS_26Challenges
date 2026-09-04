// Challenge 4 : Ajout à la Fin (Simulation de push)
function ajouterALaFin(tab, element){
 tab[tab.length]= element;

  return tab;
}
let t=[1,12,3];
let res=ajouterALaFin(t,3);
 console.log(res);


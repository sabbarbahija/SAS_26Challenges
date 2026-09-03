// Challenge 7 : Horloge / Horodatage Système
function obtenirHeureActuelle() {
    let date = new Date();
    let h= date.getHours();
    let s=date.getSeconds();
    let m=date.getMinutes();
 console.log('date :',h,m,s);
}
obtenirHeureActuelle();
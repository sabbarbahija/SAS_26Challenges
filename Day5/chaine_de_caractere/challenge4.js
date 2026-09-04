// Défi 4 : Compteur de Voyelles 
function compterVoyelles(chaine){
    let count=0;
    for(let c of chaine){
        if(c==='a'||c==='e'||c==='u'||c==='i'||c==='o'||c==='y'){
count++;
        }
    }
    return count;
}
 let n;
 n=compterVoyelles("bahija");
 console.log(n);
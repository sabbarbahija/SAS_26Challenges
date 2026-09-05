// Challenge 7 : Filtrage Manuel des Nombres Pairs

function  filtrerPairs(tab){
    let t=[];
    for(let i=0 ;i<tab.length ;i++){
        if(tab[i]%2===0){
            t[t.length]=tab[i];
        }
    }
return t;
}
console.log( filtrerPairs([1, 2, 3, 4, 5, 6]));
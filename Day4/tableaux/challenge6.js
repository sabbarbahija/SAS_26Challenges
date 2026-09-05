function  inverserTableau(tab){
let ele;
    d=0;
    f=tab.length-1;
    while(d<f){
        ele=tab[d];
        tab[d]=tab[f];
        tab[f]=ele;
        d++;
        f--;
    }
    return tab;
}
  
console.log(inverserTableau([5,8,9,0]));

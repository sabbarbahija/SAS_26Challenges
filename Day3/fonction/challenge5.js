// Challenge 5 : Le Somateur Universel (Rest Parameter)
function additionnerTout(...para) {
    console.log(para);
    let somme = 0;
    for (let nombre of para) {
        somme = somme + nombre;
    }
    return somme; 
}
console.log(additionnerTout(10, 20, 30, 40));
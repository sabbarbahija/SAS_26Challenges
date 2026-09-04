// Défi 6 : Inversion Manuelle (Simulation de reverse)
function inverserTableau(tab) {
    let t = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        t[tab.length - 1 - i] = tab[i];
    }

    return t;
}
let t = [1, 12, 3];
let res = inverserTableau(t);

console.log(res);
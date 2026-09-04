// Défi 5 : Test de Palindrome
 function estPalindrome(chaine){
     for(let i=0 ;i<chaine.length/2;i++){
        if(chaine[i] !== chaine[chaine.length-1-i]){
            return false;
        }
     }
     return true;
     }
 let n;
 n=estPalindrome("kayak");
 console.log(n);
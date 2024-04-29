//L'utente inserisce tramite prompt un numero da 1 a 5
const userNumber = parseInt( prompt("Inserisci un numero da 1 a 5") );
console.log(userNumber)

// Creo funzione per numero random
function getRndInteger(min, max) {
    //mi creo il numero random da 1 a 5
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// Creo variabile dove richiamo la funzione per il numero random
let cpuNumber = getRndInteger(1, 5)
console.log(cpuNumber)

function evenOrOdd() {
    
}


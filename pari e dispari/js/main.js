//Creo stringhe
let stringEven = "pari"
let stringOdd = "dispari"

//L'utente sceglie tra pari o dispari
const decision = prompt("Scegli tra pari e dispari")
console.log(decision)
//L'utente inserisce tramite prompt un numero da 1 a 5
const userNumber = parseInt( prompt("Inserisci un numero da 1 a 5") );
console.log(userNumber)

// FUNZIONE PER NUMERO RANDOM *******************************************************

// Creo funzione per numero random
function getRndInteger(min, max) {
    //mi creo il numero random da 1 a 5
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// Creo variabile dove richiamo la funzione per il numero random
let cpuNumber = getRndInteger(1, 5)
console.log(cpuNumber)

// FUNZIONE PER SOMMA DEI NUMERI PARI O DISPARI **********************************************************

//Creo funzione per sommare userNumber con cpuNumber e con un if dentro la funzione vedo se è pari o dispari
function sumEvenOrOdd(userNumber, cpuNumber) {
    const result = userNumber + cpuNumber;
    if (result % 2 == 0){
        console.log("Il risultato è", stringEven)
    }
    else {
        console.log("Il risultato è", stringOdd)
    }
    return result;
}

const result = sumEvenOrOdd(userNumber, cpuNumber)
console.log("Il risultato è:", result)

if (decision == stringEven || stringOdd){
    console.log("L'utente ha vinto")
} else if (decision != stringEven || stringOdd) {
    console.log("Il computer ha vinto")
}
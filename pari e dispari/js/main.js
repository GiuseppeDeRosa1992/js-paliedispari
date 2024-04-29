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
    const sum = userNumber + cpuNumber;
    let result;
    if (sum % 2 == 0){
        result = stringEven
    }
    else if (sum % 2 == 1){
        result = stringOdd
    }
    return result;
}

const evenOrOdd = sumEvenOrOdd(userNumber, cpuNumber)
console.log("la somma è:", evenOrOdd)

if (decision == evenOrOdd){
    console.log("L'utente ha vinto")
    alert("L'utente ha vinto")
} else if (decision != evenOrOdd) {
    console.log("Il computer ha vinto")
    alert("Il computer ha vinto")
}

//Creo prompt per chiedere all'utente di inserire il nome
let parola = prompt("Inserisci una parola")
console.log(parola)

//Inizio la funzione per vedere se la parola che inserisce l'utente e polindroma
function reverseWord (word) {
    //creo variabile da utilizzare per capire se la parola e uguale alla parola scritta al contrario
    let reverseWord;
    //creo array dove pusho la parola con charat per prendere ogni singola lettera
    let array = [];
    //inizio ciclo for dove il contatore sta alla lunghezza della parola -1 e poi vado a sottrarre
    for (let i = word.length - 1 ; i >= 0; i--) {
        //richiamo la variabile array e gli pusho la parola
        array.push(word.charAt(i))
        console.log(array)
        //richiamo la variabile reverseword e gli dico che è uguale ad array.join che è la parola al contrario
        reverseWord = array.join("")
        console.log(reverseWord)
    }
    //se reverse word e uguale a word allora è palindoma
    if (reverseWord == word) {
        return "palindroma"
    }
    //sennò non è palindoma
    else {
        return "non è palindroma"
    }
}
//creo variabile risultato e gli dico che è uguale al noe della funziona creata sopra ma gli aggiungo dentro il prompt nella parentesi
let result = reverseWord(parola)
console.log(result)

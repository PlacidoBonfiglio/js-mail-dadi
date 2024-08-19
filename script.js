console.log('JS OK');

//ESERCIZIO 1

// Prendere elementi dal DOM
// Preparare numero casuale per il pc
// Chiedere all'utente un numero da 1 a 6
// Preparare messaggi "Vittoria" o "Sconfitta"
// Stampare in pagina il risultato

//Prendo elemanti dal DOM
const targetElement = document.getElementById('target');

// Faccio scegliere all'utente un numero da 1 a 6
let userNumber = parseInt(prompt('Scegli un numero da 1 a 6', 2));

// Validazione
if (userNumber = '' || isNaN(userNumber) || userNumber > 6) {
    alert('Valore del campo non valido');
    location.reload();
}

// Preparo il lumero casuale da 1 a 6
const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);


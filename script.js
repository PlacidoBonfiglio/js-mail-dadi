console.log('JS OK');

//ESERCIZIO 1

// Prendere elementi dal DOM
// Chiedere all'utente un numero da 1 a 6
// Validazione scelta utente
// Preparare numero casuale per il pc
// Preparare messaggi "Vittoria" o "Sconfitta" e verifica
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
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

// Preparazione messaggio
let resultMessage = `Hai perso! il tuo numero: ${userNumber}, il numero della CPU: ${cpuNumber}`;

// controllo se l'utente ha vinto
if (userNumber > cpuNumber) resultMessage = `Hai vinto! il tuo numero: ${userNumber}, il numero della CPU: ${cpuNumber}`;

// Stampo in pagina il risultato
targetElement.innerHTML = resultMessage;


// ESERCIZIO 2
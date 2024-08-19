console.log('JS OK');

//ESERCIZIO 1

// Recupero elementi dal DOM
// Preparare numero casuale per il pc
// Preparare messaggi 
// Chiedere all'utente un numero da 1 a 6
// Validazione scelta utente
// Stampare in pagina il risultato

//Prendo elemanti dal DOM
const targetElement = document.getElementById('target');

// Preparo il lumero casuale da 1 a 6
const cpuNumber = parseInt(Math.floor(Math.random() * 6) + 1);

// Preparazione messaggio
let resultMessage = '';

// Faccio scegliere all'utente un numero da 1 a 6
let userNumber = parseInt(prompt('Scegli un numero da 1 a 6', 2));

// Validazione
if (userNumber == '' || isNaN(userNumber) || userNumber > 6) {
    alert('Valore del campo non valido');
    location.reload();
} else {
    // controllo se l'utente ha vinto
    if (cpuNumber < userNumber) {
        resultMessage = `<strong>Hai vinto!</strong> il tuo numero: <strong>${userNumber}</strong>, il numero della CPU: <strong>${cpuNumber}</strong>`;
    } else if (cpuNumber > userNumber) {
        resultMessage = `<strong>Hai perso!</strong> il tuo numero: <strong>${userNumber}</strong>, il numero della CPU: <strong>${cpuNumber}</strong>`;
    } else {
        resultMessage = `<strong>Pareggio!</strong> il tuo numero: <strong>${userNumber}</strong>, il numero della CPU: <strong>${cpuNumber}</strong>`;
    }
}

// Stampo in pagina il risultato
targetElement.innerHTML = resultMessage;


// ESERCIZIO 2

// Recupero elementi dal DOM
// Creare lista e-mail autorizzate
// Creare messaggio dell'esito del controllo
// Chiedere all'utente la sua e-mail
// Verificare che la sua mail sia nell'array
// Stampare in pagina messaggio di esito del controllo
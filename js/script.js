//chiedi all'utente il suo nome
const userName = prompt('come ti chiami?');
console.log(userName);

//chedi all'utente il suo cognome
const userLastName = prompt("qual'e' il tuo cognome?");
console.log(userLastName);

//chiedi all'utente is suo colore preferito
const userFavColor = prompt("qual'e' il tuo colore preferito?");
console.log(userFavColor);

//aggiungi tutti i dati insieme
const result = userName + userLastName + userFavColor + 21;
console.log("questa e' la tua nuova password", result);

//stampo il messaggio sulla pagina
document.getElementById('password').innerHTML = "Questa e' la tua nuova password:" + result;

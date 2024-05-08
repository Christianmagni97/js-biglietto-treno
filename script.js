/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.276 € al km)
va applicato uno sconto del 21% per i minorenni
va applicato uno sconto del 42% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]*/

const userNumbersKm = prompt('Type How many kilometers do you want to travel?' );
const userAge = prompt('What s your age?' );
console. log(userNumbersKm, userAge);
const price = 0.276;
const ticket = (0.276 * userNumbersKm);


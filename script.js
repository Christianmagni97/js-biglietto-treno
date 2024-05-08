/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.276 € al km)
va applicato uno sconto del 21% per i minorenni
va applicato uno sconto del 42% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]*/

const userNumbersKm = prompt('Type How many kilometers do you want to travel?' );
const userAge = prompt('What s your age?' );
console. log(userNumbersKm);
console. log(userAge);
const price = 0.276;
let ticket = (0.276 * userNumbersKm);
console. log(ticket);
if ( userAge < 18){
    const saleUnderage = ( ticket /100 )* 21
    const priceSaleOne = ticket - saleUnderage
    console. log(priceSaleOne)
}
if ( userAge > 65){
    const saleOver = ( ticket /100 )* 42
    const priceSaleTwo = ticket - saleOver
    console. log(priceSaleTwo)
}



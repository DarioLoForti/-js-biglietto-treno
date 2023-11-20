// chiedo di inserire età
let eta = prompt("inserisci la tua età");
console.log(eta);

// chiedo di inserire i km da percorrere
let km = prompt("inserisci i km da percorrere");
console.log(km);

// inserisco il prezzo per km
let prezzo_per_km = 0.21;
console.log(prezzo_per_km);

// calcolo il prezzo in base ai km da percorrere
let prezzo_biglietto = km * prezzo_per_km;
console.log(prezzo_biglietto);

// confronto età per calcolare lo sconto
if(eta <= 18){
    prezzo_biglietto -= prezzo_biglietto * 0.20; 
}

else if(eta >= 65) {
    prezzo_biglietto -= prezzo_biglietto * 0.40; 
}


console.log(prezzo_biglietto);

let prezzo = prezzo_biglietto.toFixed(2);

// mostro a video il prezzo finale

document.getElementById("prezzo-biglietto").innerHTML = prezzo + "€";


// BONUS

let nome = prompt("inserisci il tuo nome")

let cognome = prompt("iserisco il tuo cognome")

let partenza = prompt("inserisci città di partenza")

let arrivo = prompt("isercisci città di arrivo")

document.getElementById("nome").innerHTML = nome;

document.getElementById("cognome").innerHTML = cognome;

document.getElementById("partenza").innerHTML = partenza;

document.getElementById("arrivo").innerHTML = arrivo;
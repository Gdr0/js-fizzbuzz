// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
const container = document.querySelector(".container");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const col = `<div class= "col fizzbuzz"> FizzBuzz</div>`;
    container.innerHTML += col;
  } else if (i % 5 === 0) {
    const col = `<div class= "col buzz"> Buzz</div>`;
    container.innerHTML += col;
  } else if (i % 3 === 0) {
    const col = `<div class= "col fizz"> Fizz</div>`;
    container.innerHTML += col;
  } else {
    const col = `<div class= "col"> ${i}</div>`;
    container.innerHTML += col;
  }
}

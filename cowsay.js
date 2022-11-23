const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

// console.log(Quote.getQuote().text);
console.log(
  cowsay.say({
    text: Quote.getRandomQuote(),
    e: "00",
    T: "U",
  })
);

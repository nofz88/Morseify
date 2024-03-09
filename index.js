const morse = require('morse');

function textToMorse(text) {
  return morse.encode(text);
}

function morseToText(code) {
  return morse.decode(code);
}

// Contoh penggunaan
const text = 'Hello, Morseify!';
const morseCode = textToMorse(text);
const convertedText = morseToText(morseCode);

console.log('Text:', text);
console.log('Morse Code:', morseCode);
console.log('Converted Text:', convertedText);

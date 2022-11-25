// Scrivere un programma che, data una stringa di N caratteri, la inverta

function reverseWord(word) {
  let reversedWord = word.toLowerCase().split("").reverse().join("");
  return console.log("Es 1:", reversedWord, word.length);
}

reverseWord("supercalifragilistico");

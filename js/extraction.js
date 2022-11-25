// Scrivere un programma che, data una stringa di N caratteri, estragga tutte le vocali

function checkVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let splittedWord = word.toLowerCase().split("");

  // Array d'appoggio:
  let vowelsFound = [];

  // Push delle vocali in array vowelsFound
  for (var i in splittedWord) {
    if (vowels.includes(splittedWord[i])) {
      vowelsFound.push(splittedWord[i]);
    }
  }
  let finalWord= vowelsFound.join("");
  console.log("Es 2:", finalWord, finalWord.length);
}

checkVowels("Supercalifragilistico");

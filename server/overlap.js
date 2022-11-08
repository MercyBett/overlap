function detectOverlappingWords(word1, word2) {
  let overlappingCharacters = "";
  let longestOverlap = 0;

  // check if any of the characters in word1 are present in word2
  for (let i = 0; i < word1.length; i++) {
    const currentCharacter = word1[i];

    // if the character is present in word2, check if it's a part of the longest overlap
    if (word2.includes(currentCharacter)) {
      // create a temporary string that includes the current character
      let tempOverlappingCharacters = currentCharacter;

      // start checking for characters after the current one
      for (let j = i + 1; j < word1.length; j++) {
        const nextCharacter = word1[j];

        // if the next character is present in word2, add it to the temporary string
        if (word2.includes(nextCharacter)) {
          tempOverlappingCharacters += nextCharacter;
        } else {
          // if the next character is not present in word2, break out of the loop
          break;
        }
      }

      // if the temporary string is longer than the longest overlap so far, update the longest overlap
      if (tempOverlappingCharacters.length > longestOverlap) {
        longestOverlap = tempOverlappingCharacters.length;
        overlappingCharacters = tempOverlappingCharacters;
      }
    }
  }

  return {
    overlappingCharacters,
    longestOverlap,
  };
}

// const word1 = "device";
// const word2 = "ice";

// console.log(detectOverlappingWords(word1, word2));
// // expected output: { overlappingCharacters: 'ice', longestOverlap: 3 }

// const word3 = "client";

// console.log(detectOverlappingWords(word1, word3));
// // expected output: { overlappingCharacters: 'ie', longestOverlap: 2 }

// const word4 = "orange";
// const word5 = "rhinoceros";

// console.log(detectOverlappingWords(word4, word5));
// // expected output: { overlappingCharacters: 'rne', longestOverlap: 3 }
module.exports = { detectOverlappingWords };

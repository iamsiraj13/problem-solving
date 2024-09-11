/**
 * ? --- Direaction
 * ? Write a function that returns the number of vowels
 * ? used in a string,
 */

function countVowel(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;

  for (char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

countVowel("sirajul");

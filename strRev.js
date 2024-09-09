/**
 * ? string reversal
 * ? --- Directions
 * ? Given a string , return a new string with the
 * ? reversed order of characters
 * ? -- example
 * ? reverse("apple") === 'elppa;
 * ? reverse("hello") === 'olleh;
 */

function reverse(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  console.log(revstr);
}

reverse("hello");

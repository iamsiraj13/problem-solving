/**
 * ? adding sum of an array
 * ? you have been provide an array of number
 * ? you have to sum the numbers
 */

function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  console.log(count);
}

sum([10, 15, 30, 5]);

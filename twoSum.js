/**
 *  Write a function that returns the sum of two numbers.
 *  write a function tha returns the sum of all number regardless of # of params
 */

function twoSum(...num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    count += num[i];
  }
  console.log(count);
}
twoSum(1, 2);

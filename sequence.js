/**
 *  Give a sequence of integer to an array,
 * determine whether it is possible to obtain a strictly
 * increase sequence by removing not more than one
 * element from the array
 *
 * @example
 * For Sequence [1,3,2,1] => false
 * for sequence [1,2,3] = > true
 */

function sequence(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < inputArr[i - 1]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
  return;
}

sequence([1, 2, 3]);

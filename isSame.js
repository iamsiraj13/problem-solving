/**
 * ? - Write a function which accepts two arrays and check every value of
 * ?   the first array has it's corresponding in second array.
 * ? - The frequency value must be same
 */

// ? - time complexity O(n * m)
// ? - space complexity => O(1)

function isSame(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);

    if (index === -1) {
      return false;
    } else {
      arr2.splice(index, 1);
    }
    return true;
  }
}

isSame([4, 6, 8, 9, 10], [4, 10, 9, 8, 6]);

// edge case
// checking array length

// 1-1 (remove 1) [4,5,2]
// 2-2 remove [4,5]
// 4-4 remove [5]
// 5-5 remove []

// ! method -2 / hashtable

function isSame2(arr1, arr2) {
  const hashTable = {};
  const hashTable1 = {};

  for (let num of arr1) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }
  for (let num of arr2) {
    hashTable1[num] = (hashTable1[num] || 0) + 1;
  }

  for (let elm in hashTable) {
    if (!elm in hashTable1 || hashTable[elm] !== hashTable1[elm]) {
      return false;
    }
  }
  return true;
}

console.log(isSame2([4, 6, 8, 9, 10], [4, 10, 9, 8, 6]));

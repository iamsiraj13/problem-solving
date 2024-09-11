/**
 * ? --- Direction
 * ? Given an array and chunk size, divide the array into
 * ? many subarrays where each subarray is of length size
 */

/**
 * ! Approach
 * ? Initialize an empty array to store the chunks
 * ? Use a loop to take slice of the array given size
 * ? and push them into the chunks array
 * ? Continue slice until the entire array is divided
 * ? subarrays
 *
 */

function chunk(arr, size) {
  let emt = [];

  for (let i = 0; i < arr.length; i += size) {
    emt.push(arr.slice(i, i + size));
  }
  console.log(emt);
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);

/**
 *
 * ? you have been provided an array of numbers
 * ? you to find min and max value from array
 */

// ? this function is for find minimum value
function min(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}

min([500, 3, 55, 46]);

// ? function for maximum value
function maxValue(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

maxValue([500, 3, 55, 46]);

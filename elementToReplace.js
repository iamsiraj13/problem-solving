// For inputArray=[1,2,1], elementToReplace=1 and subtractionElem=3,
// the output should be arrayReplace(inputArray, elementToReplace,subtractionElem) == [3,2,3]

// [1,2,1,4,6,1,3,4,7] => (1)(3) => [3,2,3,4,6,3,3,4,7]

// take 3 perametter inputArr, elemToReplace, subtractElem

function elementToReplace(inputArr, elementToReplace, subtractElem) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === elementToReplace) {
      inputArr[i] = subtractElem;
    }
  }
  console.log(inputArr);
}

elementToReplace([1, 2, 1, 4, 6, 1, 3, 4, 7], 1, 3);

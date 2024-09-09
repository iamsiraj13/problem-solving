/**-
 * Give a rectangula matrix of characters , add a border of asterisks()* to it.
 *  picture = ["abc","ded"]
 */

function picture(arr) {
  const wall = "*".repeat(arr[0].length + 2);
  arr.unshift(wall);
  arr.push(wall);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "*".concat(arr[i], "*");
  }

  console.log(arr);
}

picture(["abc", "ded"]);

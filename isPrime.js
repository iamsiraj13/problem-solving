// Check is it prime number or not.

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let number = 2;
if (isPrime(number)) {
  console.log(number + " একটি মৌলিক সংখ্যা");
} else {
  console.log(number + " মৌলিক সংখ্যা নয়");
}

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the cleaned string with its reverse
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("A girl, a boy, a gril")); // true

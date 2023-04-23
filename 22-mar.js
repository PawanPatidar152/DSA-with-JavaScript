// Program to Check Whether a String is Palindrome or Not

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = "abcnba";
const string2 = "abcba"
// call the function
const value = checkPalindrome(string) ;
const value2=checkPalindrome(string2);

console.log(value,value2);

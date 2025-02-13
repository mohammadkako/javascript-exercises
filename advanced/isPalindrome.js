/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */

function isPalindrome(num) {
    if (num < 0) {
      return false;
    }
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
console.log(isPalindrome(121))
module.exports = isPalindrome;

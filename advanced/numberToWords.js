/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here
function numberToWords(num) {
    if (num === 0) return "zero";
  
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];
  
    function convert(num) {
      if (num === 0) return "";
      if (num < 20) return ones[num];
      if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
      if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 ? " " + convert(num % 100) : "");
    }
  
    let i = 0;
    let words = "";
    while (num > 0) {
      if (num % 1000 !== 0) {
        words = convert(num % 1000) + (thousands[i] ? " " + thousands[i] : "") + (words ? " " + words : "");
      }
      num = Math.floor(num / 1000);
      i++;
    }
  
    return words.trim();
  }
  console.log(numberToWords(123)); 
  console.log(numberToWords(5)); 
  console.log(numberToWords(1001)); 
  console.log(numberToWords(1000000));
  console.log(numberToWords(987654321)); // "nine hundred eighty seven million six hundred fifty four thousand three hundred twenty one"
  

module.exports = numberToWords;

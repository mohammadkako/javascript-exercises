/**
 * Problem:
 * Write a function that takes an array of numbers as input and returns the sum of the numbers in the array.
 *
 * Your task:
 * Implement the function `sumArray` that calculates the sum of all elements in the given array.
 *
 * Example:
 * sumArray([1, 2, 3]) should return 6.
 * sumArray([0, 0, 0]) should return 0.
 */

// Write your solution here
function sumArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("ارایه وارد کنید");
    }
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); 

module.exports = sumArray;

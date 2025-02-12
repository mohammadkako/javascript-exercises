/**
 * Problem:
 * Write a function that calculates the average of the numbers in an array.
 *
 * Your task:
 * Implement the function `calculateAverage` that returns the average of the numbers.
 *
 * Example:
 * calculateAverage([1, 2, 3, 4]) should return 2.5.
 * calculateAverage([10, 20, 30]) should return 20.
 */
function calculateAverage(arr){
    let sum = 0;
    for (let i = 0 ; i<arr.length ; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calculateAverage([1,2,3,4]))
module.exports = calculateAverage;

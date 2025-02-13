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
function calculateAverage(num , sum = 0 , index = 0){
    if (index === num.length) return sum / num.length;
    return calculateAverage(num , sum+num[index],index+1)
}
console.log(calculateAverage([1,2,3,4]))
module.exports = calculateAverage;

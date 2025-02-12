/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
function generateCombinations(arr) {
    const result = [];
    
    function helper(index, currentCombination) {
      if (index === arr.length) {
        if (currentCombination.length > 0) {
          result.push(currentCombination);
        }
        return;
      }
      // شامل کردن عنصر فعلی
      helper(index + 1, [...currentCombination, arr[index]]);
      // حذف عنصر فعلی
      helper(index + 1, currentCombination);
    }
  
    helper(0, []);
    return result;
  }
  console.log(generateCombinations([1,2,3]))

module.exports = generateCombinations;

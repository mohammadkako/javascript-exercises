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

generateCombinations = (array) => array.length === 0 ? array : order(array)
    

function order(array){
    if(array.length === 1){
        return [array]
    }else{
        let result = []


        for(let i=0 ; i < array.length ; i++){
            result.push(Array.of(array[i]))
        } 
        
        for (let i = 0; i <= array.length - 2; i++) {
            for (let j = i + 1; j < array.length; j++) {//gptاین لاین با 
        result.push([array[i], array[j]]);
        }
        }

        result.push(array)

        return result
    }
}
module.exports = generateCombinations;

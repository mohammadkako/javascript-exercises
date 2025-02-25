/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here

function fibonacci(num) {
    if (num <= 0) return []; // اگر عدد نامعتبر بود، آرایه خالی برگردانید
    if (num === 1) return [0]; // اگر عدد ۱ بود، فقط [0] برگردانید

    let sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return sequence;
}
module.exports = fibonacci;

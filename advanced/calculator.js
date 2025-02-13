/**
 * Problem:
 * Write a basic calculator that can perform addition, subtraction, multiplication, and division.
 *
 * Your task:
 * Implement the functions `add`, `subtract`, `multiply`, and `divide` that perform
 * the respective operations based on user input.
 *
 * Example:
 * add(2, 3) should return 5.
 * subtract(5, 2) should return 3.
 * multiply(2, 4) should return 8.
 * divide(10, 2) should return 5.
 */

// Write your solution here
function cal(opp, a, b) {
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => (b === 0 ? "write a num" : a / b),
    };
    return operations[opp] ? operations[opp](a, b) : "come on";
}

console.log(cal("multiply", 4, 5)); // 20
module.exports = { cal };

/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here
let myList = []

addTask = (TASK) => myList.push(TASK)
removeTask = (TASK) => myList = myList.filter(user => user !== TASK);    
showTasks = () => myList

module.exports = { addTask, removeTask, showTasks };

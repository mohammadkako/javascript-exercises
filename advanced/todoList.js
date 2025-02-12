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
// آرایه برای ذخیره وظایف
const tasks = [];

/**
 * افزودن وظیفه به لیست
 * @param {string} task - وظیفه جدید
 */
function addTask(task) {
    if (!task) {
        console.log("Task cannot be empty.");
        return;
    }
    tasks.push(task);
    console.log(`Task "${task}" added.`);
}

/**
 * حذف وظیفه از لیست
 * @param {string} task - وظیفه‌ای که باید حذف شود
 */
function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task "${task}" removed.`);
    } else {
        console.log(`Task "${task}" not found.`);
    }
}

/**
 * نمایش تمامی وظایف
 */
function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Current tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}
addTask("Buy groceries");
addTask("Go to the gym");
showTasks();
removeTask("Go to the gym");
showTasks();


module.exports = { addTask, removeTask, showTasks };
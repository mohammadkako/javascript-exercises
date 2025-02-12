// لیست کاربران
const users = [];

/**
 * اضافه کردن کاربر
 * @param {string} username
 */
function addUser(username) {
    if (!username) {
        console.log("Username cannot be empty.");
        return;
    }
    users.push(username);
    console.log(`User "${username}" added.`);
}

/**
 * حذف کاربر
 * @param {string} username
 */
function removeUser(username) {
    const index = users.indexOf(username);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`User "${username}" removed.`);
    } else {
        console.log(`User "${username}" not found.`);
    }
}

/**
 * نمایش کاربران
 */
function showUsers() {
    if (users.length === 0) {
        console.log("No users available.");
    } else {
        console.log("Current users:", users);
    }
}


addUser("Alice");
addUser("Bob");
showUsers(); // Current users: [ 'Alice', 'Bob' ]
removeUser("Alice");
showUsers(); // Current users: [ 'Bob' ]

module.exports = { addUser, removeUser, showUsers };
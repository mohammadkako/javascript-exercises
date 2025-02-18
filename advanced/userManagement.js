let output = []
const addUser = (user) => output.includes(user) ? false : output.push(user)
const removeUser = (user) => output.includes(!user) ? false : output.splice(output.indexOf(user),1)
const showUsers = () => output
module.exports = { addUser, removeUser, showUsers };
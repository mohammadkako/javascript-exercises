/**
 * Problem:
 * Write a program that displays a live digital clock in the browser.
 * The digital clock should show the current time in the format "HH:MM:SS" and update every second.
 *
 * Your task:
 * 1. Implement the function `digitalClock` that retrieves the current time.
 * 2. Format the time into the "HH:MM:SS" format (e.g., "14:05:09").
 * 3. Display the formatted time in a browser element (e.g., a `div` or `span`).
 * 4. Use `setInterval` to update the displayed time every second.
 *
 * Example:
 * - If the current time is 2:15:45 PM, the digital clock should display "14:15:45".
 * - The time display should automatically update every second without refreshing the browser.
 *
 * Note:
 * This exercise involves DOM manipulation. Ensure you have an HTML file with a container element
 * (e.g., `<div id="clock"></div>`) to display the clock.
 */


// i need help for this one

function digitalClock() {
    let ele = document.getElementById("clock")// المنت اچ تی ام ال رو فرضا سلکت میکنیم
    let time = new Date() // از زمان حال شی میسازیم

    ele.textContent = time.toLocaleTimeString('en-GB', { hour12: false }) 
//زمان به صورت 24 ساعت و به شکل دو رقمی و ثانیه:دقیقه:ساعت در صفحه وب و داخل المنت نوشته میشود 
}

setInterval(digitalClock, 1000)//هر ثانیه زمان بروز میشه

module.exports = digitalClock;

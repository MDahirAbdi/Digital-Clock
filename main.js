// Selecting the HTML elements with IDs 'time' and 'date'
let time = document.querySelector("#time");
let date = document.querySelector("#date");

// Calling the 'today' function every second using setInterval
setInterval(today, 1000);

// Function to update the time and date
function today() {
    // Creating a new Date object to get the current date and time
    let today = new Date();

    // Array of abbreviated month names
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Array of abbreviated day names
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Constructing the current time with leading zeros for single-digit hours, minutes, and seconds
    let currentTime = `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}:${
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}:${
        today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()}`;

    // Constructing the current date including day name, day, month name, and year
    let currentDate = `${dayNames[today.getDay()]}, ${today.getDate()} ${
        monthNames[today.getMonth()]
    } ${today.getFullYear()}`;

    // Updating the HTML content of the 'time' and 'date' elements with the current time and date
    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
}

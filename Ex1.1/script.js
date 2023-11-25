// script.js

function updateClock() {
  var now = new Date();

  var day = now.toLocaleDateString("en-US", { weekday: "long" });

  var hours = now.getHours();
  var meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zero if the number is less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var formattedTime = `Today is: ${day}.<br>Current time is: ${hours} ${meridiem} : ${minutes} : ${seconds}`;

  var clockElement = document.getElementById("clock");

  if (clockElement) {
    clockElement.innerHTML = formattedTime;
  } else {
    console.error("Element with ID 'clock' not found.");
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

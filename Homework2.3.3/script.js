function updateCountdown() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1);

    var timeDifference = newYear - now;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var countdownString = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    document.getElementById("countdown").innerHTML = countdownString;
}

setInterval(updateCountdown, 1000);
updateCountdown();

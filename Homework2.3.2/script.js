function updateTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("time").innerHTML = timeString;

    var dateString = formatDate(now);
    document.getElementById("date").innerHTML = dateString;
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

function formatDate(date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime();

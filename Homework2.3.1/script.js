function checkLogin() {
    // Get values from input fields
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check conditions for invalid data
    if (containsSpecialCharacters(username) || containsExtraSpaces(username) || containsInvalidPassword(password)) {
        alert("Invalid Name or Password.");
    } else {
        alert("Login successful!");
    }
}

function containsSpecialCharacters(str) {
    // Check if the string contains special characters
    var regex = /^[a-zA-Z0-9]+$/;
    return !regex.test(str);
}

function containsExtraSpaces(str) {
    // Check if the string contains extra spaces
    return /\s\s+/.test(str);
}

function containsInvalidPassword(password) {
    // Check if the password contains spaces or special characters other than @
    var regex = /^[^\s@]+$/;
    return !regex.test(password);
}

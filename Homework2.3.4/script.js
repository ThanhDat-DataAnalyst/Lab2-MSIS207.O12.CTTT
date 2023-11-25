let currentInput = "";
const display = document.getElementById("display");

function appendToDisplay(event, value) {
    currentInput += value || event.target.innerText;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        alert("Invalid expression.");
        clearDisplay();
    }
}

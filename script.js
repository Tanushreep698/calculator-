let display = document.getElementById("display");
let currentInput = "";
let operator = null;

function appendNumber(number) {
    if (currentInput === "0" && number === "0") return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === "") return;
    currentInput += ` ${op} `;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = "";
    updateDisplay("0");
}

function backspace() {
    currentInput = currentInput.trim();
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay(currentInput || "0");
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/[^-()\d/*+.]/g, "")).toString();
        updateDisplay(currentInput);
    } catch (error) {
        updateDisplay("Error");
        currentInput = "";
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

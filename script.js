const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

let currentNumber = "";
let previousNumber = "";
let operator = null;

// Add number or decimal
function appendNumber(number) {

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (currentNumber === "0" && number !== ".") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

    updateDisplay();
}


// Select operator
function chooseOperator(selectedOperator) {

    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    if (currentNumber !== "" && previousNumber !== "") {
        calculate();
    }

    operator = selectedOperator;

    previousNumber = currentNumber;
    currentNumber = "";

    updateDisplay();
}


// Calculate result
function calculate() {

    if (previousNumber === "" || currentNumber === "" || operator === null) {
        return;
    }

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                currentNumber = "Error";
                previousNumber = "";
                operator = null;
                updateDisplay();
                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;
    }

    currentNumber = Number(result.toFixed(10)).toString();

    previousNumber = "";
    operator = null;

    updateDisplay();
}


// Clear calculator
function clearDisplay() {

    currentNumber = "";
    previousNumber = "";
    operator = null;

    updateDisplay();
}


// Delete last digit
function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);

    updateDisplay();
}


// Update screen
function updateDisplay() {

    currentDisplay.textContent =
        currentNumber || "0";

    if (previousNumber && operator) {

        let symbol = operator;

        if (operator === "*") symbol = "×";
        if (operator === "/") symbol = "÷";

        previousDisplay.textContent =
            `${previousNumber} ${symbol}`;

    } else {

        previousDisplay.textContent = "";
    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN(key) || key === ".") {
        appendNumber(key);
    }

    else if (["+", "-", "*", "/", "%"].includes(key)) {
        chooseOperator(key);
    }

    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }

    else if (key === "Backspace") {
        deleteNumber();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});
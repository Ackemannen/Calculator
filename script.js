// Selecting elements from the dom
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("=-btn");
const clearBtn = document.getElementById("clear-btn");

// Define a boolean error tag
let ifError = true;

// Marks it as error and displays it
function showError() {
    ifError = true
    screen.innerHTML = "Error"
}

// Adds the sign to the calculator
function addNumber(num) {
    if (/[a-z]+/.test(screen.innerHTML)) {
        showError();
    }
    // If error msg is on it clears it then adds sign
    if (ifError) {
        clearScreen();
        screen.innerHTML = num;
        ifError = !ifError;
    } else {
        screen.innerHTML += num;
    }
}

// Clears the calculator screen
function clearScreen() {
    screen.innerHTML = "";
    console.log("Cleared");
}

// Calculates the requested calculation
function calculate() {
    if (/^[\*\/]|[\+\-\*\/\.]{2,}|[\+\-\*\/\.]$/.test(screen.innerHTML)) {
        showError();
    } else {
        screen.innerHTML = eval(screen.innerHTML);
    }

}

// Checks if a number button has been pressed and calls the addNumber function
buttons.forEach(button => button.addEventListener('click', () => {
    addNumber(button.innerHTML);
}));

// Calls the calculate function
equalBtn.addEventListener("click", calculate);
// Calls the clearScreen function
clearBtn.addEventListener("click", clearScreen);
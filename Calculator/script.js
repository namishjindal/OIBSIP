const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

// Add event listener for Enter key to trigger the calculation
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateResult();
    }
});

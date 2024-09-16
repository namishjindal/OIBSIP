function convertTemperature() {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(tempInput) || tempInput === "") {
        result.textContent = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let convertedUnit;

    if (unit === "Celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "Fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (unit === "Kelvin") {
        convertedTemp = temperature - 273.15;
        convertedUnit = "Celsius";
    } else {
        result.textContent = "Conversion not supported!";
        return;
    }

    // If Kelvin is selected, add the conversion back to Kelvin
    if (unit !== "Kelvin") {
        const kelvinTemp = temperature + 273.15;
        result.textContent = `${temperature} ${unit} = ${convertedTemp.toFixed(2)} ${convertedUnit}, ${kelvinTemp.toFixed(2)} Kelvin`;
    } else {
        const fahrenheitTemp = (temperature - 273.15) * 9/5 + 32;
        result.textContent = `${temperature} ${unit} = ${convertedTemp.toFixed(2)} Celsius, ${fahrenheitTemp.toFixed(2)} Fahrenheit`;
    }
}

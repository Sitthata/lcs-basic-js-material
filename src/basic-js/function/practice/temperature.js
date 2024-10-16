// temperature.js

/* 
Create a function that takes 3 inputs:
convertTemperature(temp, inputUnit, outputUnit)
return the converted temperature format decimal 1.00

Example output
(25, 'C', 'F') => 77.00
(32, 'F', 'K') => 273.15
(300, 'K', 'C') => 26.85

Formulas:
F to C: C = (F - 32) * 5/9
K to C: C = K - 273.15

C to F: F = (C * 9/5) + 32
C to K: K = C + 273.15
*/

export function convertTemperature(temp, inputValue, outputValue) {
  // your code here
  const validValue = ["C", "F", "K"];
  if (!validValue.includes(inputValue) && !validValue.includes(outputValue))
    return;
  /* 
    "CaR" => string.toLowerCase() => "car" === "car"
    "32F" -> C -> K
    */
  function convertToCelcius() {
    if (inputValue === "C") {
      return temp;
    } else if (inputValue === "F") {
      return (temp * 9) / 5 + 32;
    } else {
      return temp + 273.15;
    }
  }
  const tempCelcius = convertToCelcius()
}

// celcius

const fruits = ["Apple", "Banana", "Cherry"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

const colors = ["Red", "Green", "Blue", "Yellow"];

// Skip the first and third elements
const [, secondColor, , fourthColor] = colors;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, ...rest] = numbers;

// console.log(rest)

function extractRGB(color) {
  const colorDatabase = {
    red: [255, 0, 0],
    green: [0, 128, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
    cyan: [0, 255, 255],
    magenta: [255, 0, 255],
    black: [0, 0, 0],
    white: [255, 255, 255],
    // Add more colors as needed
  };

  return colorDatabase[color.toLowerCase()] || [0, 0, 0];
}

const [red, green, blue] = extractRGB("Red");
console.log(red, green, blue);

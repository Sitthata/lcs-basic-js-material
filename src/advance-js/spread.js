// spread.js

// 1. Introduction to Spread Operator
function introductionToSpreadOperator() {
  // The spread operator allows an iterable (like an array or string) to be expanded
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5];
  console.log("Introduction - Expanded Array:", newNumbers);
  // Output: Introduction - Expanded Array: [1, 2, 3, 4, 5]

  const greeting = "Hello";
  const letters = [...greeting];
  console.log("Introduction - Expanded String:", letters);
  // Output: Introduction - Expanded String: ['H', 'e', 'l', 'l', 'o']
}

// 2. Merge Arrays
function mergeArrays() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  console.log("Merge Arrays:", mergedArray);
  // Output: Merge Arrays: [1, 2, 3, 4, 5, 6]
}

// 3. Merge Objects
function mergeObjects() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const mergedObject = { ...obj1, ...obj2 };
  console.log("Merge Objects:", mergedObject);
  // Output: Merge Objects: { a: 1, b: 3, c: 4 }
}

function updateObject() {
  const product = {
    id: "p001",
    name: "Laptop",
    category: "Electronics",
    price: 1000,
  };
  const updatedProduct = { ...product, price: 1200, brand: "Apple" };
  console.log("original product:", product);
  console.log("updated product:", updatedProduct);
}

// 4. Spread Function Arguments
function spreadFunctionArguments() {
  function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  const total = sum(...numbers);
  console.log("Spread Function Arguments:", total);
  // Output: Spread Function Arguments: 6
}

// 5. Copying Arrays and Objects
function copyingArraysAndObjects() {
  // Copying an array
  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray];
  console.log("Copied Array:", copiedArray);
  // Output: Copied Array: [1, 2, 3]

  // Copying an object
  const originalObject = { a: 1, b: 2 };
  const copiedObject = { ...originalObject };
  console.log("Copied Object:", copiedObject);
  // Output: Copied Object: { a: 1, b: 2 }
}

// 6. Combining with Other Data Structures
function combiningWithOtherDataStructures() {
  const array = [1, 2, 3];
  const set = new Set([4, 5, 6]);
  const combined = [...array, ...set];
  console.log("Combining with Set:", combined);
  // Output: Combining with Set: [1, 2, 3, 4, 5, 6]
}

// 7. Nested Spread Operators
function nestedSpreadOperators() {
  const obj1 = { a: 1, b: { x: 10 } };
  const obj2 = { ...obj1, b: { ...obj1.b, y: 20 } };
  console.log("Nested Spread Operators:", obj2);
  // Output: Nested Spread Operators: { a: 1, b: { x: 10, y: 20 } }
}

// 8. Rest Parameters vs. Spread Operator
function restParametersVsSpreadOperator() {
  // Spread Operator
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4];
  console.log("Spread Operator:", newNumbers);
  // Output: Spread Operator: [1, 2, 3, 4]

  // Rest Parameters
  function collect(...args) {
    return args;
  }
  const collected = collect(1, 2, 3, 4);
  console.log("Rest Parameters:", collected);
  // Output: Rest Parameters: [1, 2, 3, 4]
}

// Execute all functions to demonstrate
function runAllExamples() {
  updateObject();
}

// Run all examples
runAllExamples();

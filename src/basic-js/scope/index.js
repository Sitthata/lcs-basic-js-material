let globalVar = "I'm a global variable";

function outerFunction() {
  let outerVar = "I'm an outer function variable";

  function innerFunction() {
    let innerVar = "I'm an inner function variable";

    console.log(globalVar); // Accesses globalVar (global scope)
    console.log(outerVar); // Accesses outerVar (outerFunction scope)
    console.log(innerVar); // Accesses innerVar (innerFunction scope)
  }

  innerFunction();

  // Trying to access innerVar here would result in an error
  // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

// outerFunction();

// Trying to access outerVar here would also result in an error
// console.log(outerVar); // Uncaught ReferenceError: outerVar is not defined

function main() {
  function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  // Call add() 3 times
  add();
  add();
  add();

  console.log(add());
  //The counter should now be 3. But it is 1.
}

main();

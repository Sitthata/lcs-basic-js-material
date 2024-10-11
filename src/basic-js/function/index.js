const firstname = "My name is ${1 + 5}";

function greet(name) {
  if (!name) {
    name = "Stranger";
  }
  console.log(`Hello! ${name}`);
}

function greets() {
  return `Hello!`;
}

function plusfive(x) {
  if (!x) {
    return 5;
  }
  return x + 5;
}

// function isEven(num) {
//     return num % 2 === 0;
// }

// const isEven = function (num) {
//     return num % 2 === 0; // boolean
// }

const isEven = (num) => {
  return num % 2 === 0;
};

function createTeam(teamName) {
  console.log(`Team ${teamName} has been created!`);
  return (teamPlayer) => {
    console.log(`Team ${teamPlayer} has been deleted!`);
  };
}

console.log(firstname);

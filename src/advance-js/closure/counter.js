function createCounter() {
  let counter = 0;

  function increment() {
    counter += 1;
  }

  function decrement() {
    counter -= 1;
  }

  function getCount() {
    return counter;
  }

  return { increment, decrement, getCount };
}

const counter1 = createCounter();
const counter2 = createCounter();

const counter = createCounter()

console.log(typeof counter1)

counter1.increment()
counter1.increment()
counter1.increment()

console.log(counter1.getCount())
console.log(counter2.getCount())

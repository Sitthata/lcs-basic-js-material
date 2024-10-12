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

const counter = createCounter();

console.log(typeof counter.increment) 

counter.increment()
counter.increment()
counter.increment()

console.log(counter.getCount())

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

const { increment, getCount } = createCounter();

increment()
increment()
increment()

console.log(getCount())

// console.log(typeof counter.increment) 

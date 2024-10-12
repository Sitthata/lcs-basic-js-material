class Counter {
    #count = 0
    constructor() {
        this.#count = 0;
    }

    increment() {
        this.#count += 1;
    }

    decrement() {
        this.#count -= 1;
    }

    getCount() {
        return this.counter;
    }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());


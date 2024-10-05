export default class DividedByZeroError extends Error {
    constructor(message = "Cannot divide by zero.") {
        super(message);
        this.name = "DividedByZeroError";
    }
}
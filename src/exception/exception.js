import DividedByZeroError from "./custom/DividedByZeroError";

/**
 * divide
 * Divides two numbers and throws DividedByZeroError if the divisor is zero.
 * @param {number} numerator 
 * @param {number} denominator 
 * @returns {number} Result of division
 * @throws {DividedByZeroError}
 */
function divide(numerator, denominator) {
    // TODO: Implement division and handle division by zero
    if (denominator === 0) {
        throw new DividedByZeroError();
    }

    return numerator / denominator;
}

/**
 * sqrt
 * Calculates the square root of a number and throws NegativeInputError if input is negative.
 * @param {number} value 
 * @returns {number} Square root of the input
 * @throws {Error}
 */
function sqrt(value) {
    // TODO: Implement square root calculation and handle negative input
}

/**
 * randomOperation
 * Performs an operation that has a chance to fail by throwing MathRandomError.
 * @returns {void}
 * @throws {Error}
 */
function randomOperation() {
    // TODO: Implement operation with random error occurrence
}

/**
 * findResource
 * Finds a resource by ID and throws NotFoundError if the resource does not exist.
 * @param {string} resourceId 
 * @returns {object} The found resource
 * @throws {Error}
 */
function findResource(resourceId) {
    // TODO: Implement resource finding and handle not found case
}

const main = () => {
    // try {
        divide(10, 0);
    // } catch (error) {
    //     console.error(error.message);
    // }

    console.log("This run after error")
    // sqrt(-1);
    // randomOperation();
    // findResource("invalid-id");
}

main()
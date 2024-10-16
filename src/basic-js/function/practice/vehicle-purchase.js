// Link - https://exercism.org/tracks/javascript/exercises/vehicle-purchase

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  throw new Error("Please implement the needsLicense function");
}

/**
 * Recommends whether to purchase a vehicle based on its kind, price, and performance.
 *
 * @param {string} kind - The type of vehicle (e.g., 'car', 'motorcycle', 'truck', 'electric').
 * @param {number} price - The price of the vehicle in dollars.
 * @param {number} performance - A performance metric (e.g., horsepower, efficiency score).
 * @returns {string} Recommendation message.
 * 
 * @example
 * Car
 * Price < 20000 and Performance > 150 => "You should purchase this car!"
 * Price > 20000 and Performance > 150 => "You should consider purchasing this car."
 * Price < 20000 and Performance < 150 => "You should not purchase this car."
 * 
 * Motorcycle
 * Price < 6000 and Performance > 80 => "You should purchase this motorcycle!"
 * Price > 6000 and Performance > 80 => "You should consider purchasing this motorcycle."
 * Price < 6000 and Performance < 80 => "You should not purchase this motorcycle."
 */
export function chooseVehicle(kind, price, performance) {
    // Using switch case and if-else
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  throw new Error("Please implement the calculateResellPrice function");
}

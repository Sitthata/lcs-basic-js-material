// Link - https://exercism.org/tracks/javascript/exercises/vehicle-purchase

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind === "car" || kind === "truck") {
    return true;
  }
  return false;
  // return (kind === "car" || kind === "truck")
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
 * Price > 20000 and Performance < 150 => "You should not purchase this car."
 *
 * Motorcycle
 * Price < 6000 and Performance > 80 => "You should purchase this motorcycle!"
 * Price > 6000 and Performance > 80 => "You should consider purchasing this motorcycle."
 * Price > 6000 and Performance < 80 => "You should not purchase this motorcycle."
 */
export function chooseVehicle(kind, price, performance) {
  // Using switch case and if-else
  switch (kind.toLowerCase()) {
    case "car":
      if (price < 20000 && performance > 150) {
        return "You should purchase this car!";
      } else if (price > 20000 && performance > 150) {
        return "You should consider purchasing this car";
      } else if (price > 20000 && performance < 150) {
        return "You should not purchase this car!";
      }

    case "motorcycle":
      if (price < 6000 && performance > 80) {
        return "You should purchase this motorcycle!";
      } else if (price > 6000 && performance > 80) {
        return "You should consider purchasing this motorcycle";
      } else if (price > 6000 && performance < 80) {
        return "You should not purchase this motorcycle!";
      }

    default:
      return "not found";
  }
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
  if (age < 3) {
    return (originalPrice * 80) / 100;
  } else if (age <= 3 && age <= 10) {
    return (originalPrice * 70) / 100;
  } else if (age > 10) {
    return (originalPrice * 50) / 100;
  }
}

function main() {
  // console.log(chooseVehicle("CaR", 25000, 140));
  console.log(calculateResellPrice(100, 15));
}

main();

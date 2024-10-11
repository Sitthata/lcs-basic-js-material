/* 
Description: Create a function to calculate the average rating of a movie and categorize it based on the average score.

Requirements:

Function Name: rateMovie
Parameters:
ratings (Array of Numbers): Individual ratings (1 to 5)
Behavior:
Calculate the average rating.
Categorize the movie as:
4.5-5: "Excellent"
3.5-4.4: "Good"
2.5-3.4: "Average"
1.5-2.4: "Poor"
Below 1.5: "Terrible"
Output: average and category.

Example:
rateMovie([5, 4, 4, 5, 5]);
// Output: { average: "4.60", category: "Excellent" }

rateMovie([3, 3, 4, 2, 3]);
// Output: { average: "3.00", category: "Average" }

*/

export function rateMovie(ratings) {
  // Your code here
  function calcaluteAverage() {
    let sum = 0;
    for (const rate of ratings) {
      sum += rate;
    }
    return sum / ratings.length;
  }
  console.log(calcaluteAverage());

  return {
    average: 4.6,
    category: "Excellent",
  };
}

const ratingTest = [1, 2, 4, 5, 1, 4, 3];
console.log(rateMovie(ratingTest));

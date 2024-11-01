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
  const sum = ratings.reduce((acc, curr) => acc + curr, 0);
  const averageResult = sum / ratings.length;
  let categoryResult = "";
  if (averageResult >= 4.5) {
    categoryResult = "Excellent";
  } else if (averageResult >= 3.5) {
    categoryResult = "Good";
  } else if (averageResult >= 2.5) {
    categoryResult = "Average";
  } else if (averageResult >= 1.5) {
    categoryResult = "Poor";
  } else {
    categoryResult = "Terrible";
  }

  return {
    average: averageResult.toFixed(2),
    category: categoryResult,
  };
}

console.log(rateMovie([5, 3, 3, 1, 5]));

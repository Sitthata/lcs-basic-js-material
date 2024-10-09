// let i = 0;
// while (i < 10) {
//   console.log(num);
//   i++;
//   num++;
// }

const numberInput = 34;

/* 
Pling -> 3
Plang -> 5
Plong -> 7

"PlingPlangPlong"
*/
const pling = "Pling";
const plang = "Plang";
const plong = "Plong";
result = "";

// snake_case
// camelCase

if (numberInput % 3 === 0) {
  result += pling;
}
if (numberInput % 5 === 0) {
  result += plang;
}
if (numberInput % 7 === 0) {
  result += plong;
}
if (numberInput % 3 !== 0 && numberInput % 5 !== 0 && numberInput % 7 !== 0) {
  console.log(String(numberInput)); 
}
console.log(result);

const array = [10, 20, 30, 40, 50];

// index
// array.forEach((score, index) => {
//     array[index] = score * 2
// })

const doubled = array.map((num) => num * 2);
const filtered = array.filter((num) => num >= 30);

array[3] = 500

console.log(array);
// console.log(filtered)
// console.log(doubled);

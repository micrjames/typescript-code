let first: number = 12;
let second: number = 23;

console.log(`The first number is ${first} and the second is ${second}.`);

let temp: number;
temp = first;
first = second;
second = temp;

console.log(`The first number is ${first} and the second is ${second}.`);

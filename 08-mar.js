//Program to Check if the Numbers Have Same Last Digit


// take input
let a = 098765
let b = 6785


// find the last digit
const result1 = a % 10;
const result2 = b % 10;


// compare the last digits
if(result1 == result2) {
    console.log(`${a} and ${b} have the same last digit.`);
}
else {
    console.log(`${a} and ${b} have different last digit.`);
}
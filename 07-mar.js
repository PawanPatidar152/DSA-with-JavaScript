//Program to Find the Sum of Natural Numbers

// take input from the user 
//Here I am user so jo mera man ho rha wo digit le rha hu...
let number = 51

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
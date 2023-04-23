//Program to Print All Prime Numbers in an Interval

//lowerNumber is starting point of interval
let lowerNumber = 35;

//higherNumber is ending point of interval
let higherNumber = 98


let arr=[]

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        arr.push(i)
    }
}

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:${arr}`);
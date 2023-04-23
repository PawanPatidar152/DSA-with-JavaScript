//Program to Find LCM

// Input must be positive
const num1 = 12
const num2 = 29

// higher number among number1 and number2 is stored in min
if(num1>num2){
    min=num1
}
else min=num2
// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
//JavaScript Program to Replace All Occurrences of a String

//Method1
const string = 'Mr red has a red house and a red car';

const result = string.split('red').join('blue');

console.log(result);

//Method2
//It changes only first findable string...hasne wala emoji...
const string1 = 'Mr red has a red house and a red car';

let x=string1.replace("red","blue")

console.log(x)
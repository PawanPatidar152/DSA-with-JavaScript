//Program to Display the Multiplication Table

//num is whose multiplication table is required
let num = 91

//range is the ending point where our table ends
let range = 50;

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    let res = i * num;
    console.log(num +" X "+ i + " = " + res);
}
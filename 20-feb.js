//Program to Calculate the Area of a Triangle

// When sides of the triangle is given....
let side1 = 6; 
let side2 = 5; 
let side3 = 7; 
// formula of finding area by using sides
let s = (side1 + side2 + side3)/2;

//calculating area..
let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

//printing the result....
console.log(`The area of given triangle with sides side1,side2,side3 is ${area}`);


//Second Method
//When height and base is given

function area2(height,base){
    let resultedArea=1/2*height*base
    console.log(`The area of given triangle with height and base is ${resultedArea}`);
}

area2(10,5);
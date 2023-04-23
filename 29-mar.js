//Program to Convert the First Letter of a String into UpperCase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = "prince";

const result = capitalizeFirstLetter(string);

console.log(result);
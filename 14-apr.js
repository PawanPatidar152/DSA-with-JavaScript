//JavaScript Program to Create Multiline Strings
//Method1
// using the + operator
const message = 'This is a long message\n' + 
    'that spans across multiple lines\n' + 
    'in the code.'

console.log(message);

//Method2
// using the \ operator
const message1 = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message1);

//Method3

// using the template literal

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2);
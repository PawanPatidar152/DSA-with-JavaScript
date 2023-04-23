//JavaScript Program to Merge Property of Two Objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    name:'Prince',
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);
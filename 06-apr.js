//Program to Clone a JS Object
const person = {
  name: "John",
  age: 21,
}

// cloning the object
const clonePerson = { ...person };

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);
console.log(person.name);

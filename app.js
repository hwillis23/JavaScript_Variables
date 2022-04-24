console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = 'Hannah';
let lastName = 'Willis';
var age = 36;


// Exercise 2
let fullName = firstName +" "+ lastName ; //  +" " to add in a string and space b/t  "" to give space between first and last name (wont work if put " " at the end)
fullName = `${firstName} ${lastName}`;  //Bonus template literal
console.log(fullName);

// Exercise 3
let city = 'Faunsdale';

let pastTime = 'hunting'; 

let myStory = `Hello! My name is ${fullName}. I live in ${city}. My favorite activities are ${pastTime} and coding.`;  
 console.log(myStory); 

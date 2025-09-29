// String Manipulation and files

// Q3.1
// Defining 4 string variables
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Euan";

// Logging all strings to console to test
console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);


// Q3.2

// outputting length of myString to console
console.log(`myString is ${myString.length} char long`);

// outputting first character of myString to console
console.log(`1st char of myString is ${myString.charAt(0)}`);

// outputting 11th character of myString to console
console.log(`11th char of myString is ${myString.charAt(10)}`);


// Q3.3

// Slicing "is a" from myString and storing in new string variable
let slicedString = myString.slice(5, 9);
console.log(slicedString);

// using substring to get "the" from anotherString
let subStringVar = anotherString.substring(6, 9);
console.log(subStringVar);

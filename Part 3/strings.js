// File: strings.js
// Description: String Manipulation and Files
// JavaScript Assessment task 2: Part B - Q3.1 - 3.8
// Author: Euan Renfrey-Douglas
// Date created: 2025-09-24
// Last modified: 2025-10-24
// Version: 1.5.1



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



// Q3.4
// Making lower and uppercase copies of myName
let myNameUpper = myName.toUpperCase();
let myNameLower = myName.toLowerCase();

console.log(myNameUpper);
console.log(myNameLower);


// Q3.5
// concatinating hello and myName
let concatString = hello.concat(` `, myName);
console.log(concatString);

// trimming spaces from anotherString
let trimmedString = anotherString.trimStart();
console.log(trimmedString);

// replacing "is a" with empty space in myString
let replacedString = myString.replace(`is a`, ``);
console.log(replacedString);

// turning myString into an array by splitting at the spaces
let splitString = myString.split(" ");
console.log(splitString);


// Q3.7
// Importing node file system module
const fs = require('node:fs');

// write to file function
// 2 params for text and name of file
function writeToFile(data, fileName) {
  console.log("Writing to file..");

  // creates file with name given, writes data to said file
  fs.writeFile(fileName, data, (err) => {

    if (err) {
      // outputs error message if something fails
      console.error(err);

    } else {
      // output message on successful execution
      console.log("File successfully written.");
    }
  });
}

// creating data to put into function
let stringOfText = "This is a string of text";

// calling function with data and filename
writeToFile(stringOfText, "output.txt");



// Q3.8
// read from file function
// 1 param, the file to read from
// Outputs file contents in console
function readFromFile(fileName) {
  console.log("Reading file..");

  fs.readFile(fileName, (err, fileText) => {

    if (err) {
      // outputs error message and returns if something fails
      console.error(err);
      return;
    }

    // outputs the contents of read file as a string to console
    console.log('File contents:');
    console.log(fileText.toString());
  });
}

// calling read function for output text file
readFromFile("output.txt");

 "use strict" // treat all the js code for the newer version

console.log(3
    +
    3) // code readibility should be high so proper indentation is must 

console.log("hello");

let userName = "Abhishek"; // string 
let userId = 561032; // number 
let state; // undefined (variable assign hai but usko value nhi dia hai)

// Different types of datatypes

// number => 2 to power 53
// bigInt
// string => ""(double quotes) or ''(single quotes)
// boolean => true/false 
// null => standalone value hai (empty) 
// undefined => mean abhi value assign nhi hua hai
// unique => unique


// object 

console.log(typeof" height");
console.log(typeof null); // type ----> objects
console.log(typeof undefined); // type ----> undefined



// -----------------------------------Datatypes Summmary-------------------------------------------

// Primitive 
//  7 tyeps : String, Number, Boolean, null, undefined, symbol, BigInt;

// Examples of datatypes

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// Reference (Non primitive)
// Array, Objects, Functions;

const fruit = ["Apple", "Bananas", "Mangoes"];  // Example of Array type
let myObj = {
    name: "Abhishek",
    age: 23,
    state: "WB",
}  // Example of object type

const myFunction = function(){
    console.log("Hello world;");
}


console.log(typeof fruit);  // By using typeof we can get to know the type of datatype 

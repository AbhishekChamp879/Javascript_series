const name = "abhishek-kumar_giri";
const repoCount = 50;

console.log(name+repoCount+"value");  // normal way of concating the string

// zakkas jindagi of concating of string (string interpolation way)
console.log(`My name is ${name} and my repocount is ${repoCount}`);



//Usuage of various types of method/function of javascript

console.log(name[0])
console.log(name.__proto__)

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.indexOf("h"));
console.log(name.charAt(2));

const newString = name.substring(0,5)
console.log(newString)

const oldString = name.slice(0,2)
console.log(oldString)

const newStringOne = "       abhishek          ";
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://abhishek.com/abhishek%20giri"

console.log(url.replace('%20', '-' ))
console.log(url.includes('abhishek'))

console.log(name.split('-'))
console.log(name.bold())

console.log(name.italics())
console.log(name.blink())

console.log(name.concat(newStringOne))
console.log(name.fontsize(85))

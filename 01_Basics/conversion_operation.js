let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0; 
// undefined => NaN

let isLoggedIn = 5

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false;
// "" => false
// "hello" => true
// null, undefined => false

let userName = null;
let stringType = String(userName);

console.log(typeof(stringType))
console.log (stringType);

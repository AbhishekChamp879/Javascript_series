const accountId = 144453;
let accountEmail = "abhishekkumargiri770@gmail.com";
accountPassword = "123565"
var accountCity = "jaipur";
let accountState;

// accountId = 2; // Assignment to constant variable not allowed.

// console.log(accountId); // An example of commenting for better understanding of the code.

accountEmail = "hello";
accountPassword = "123565"
accountCity = "bengaluru";

console.table([accountCity, accountEmail, accountId, accountState])


/*
Note: If we don't give value to the variable it will give the output undefined
Note: Printing multiple output in the form of table in the "console": use console.table
Note: Prefer not to use var , because of the issue of block scope and functional scope 
*/
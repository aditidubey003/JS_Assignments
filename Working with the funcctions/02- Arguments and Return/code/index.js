/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello (name){
  alert (`Hello ${name}`)
}

sayHello("Aditi");
sayHello("papa");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName (firstName, lastName){
 alert(firstName + " "  + lastName)
}

getFullName ('Aditi', 'Dubey');
getFullName ('S.K', 'Dubey');

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`


*/

function addTwoNumbers (firstNum, secondNum){
let sum;
sum  = firstNum + secondNum;
if(typeof firstNum !== "number" || typeof secondNum !== "number"){
  alert(`Enter a valid output`)
} else {
  alert (sum);
}

}

// Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 52
addTwoNumbers(10, "100"); // Alert Enter Valid Input

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc (numA, numB, operation){
if(operation == 'add'){
  alert (numA + numB);
} else if (operation == 'mul'){
  alert(numA * numB);
} else if (operation == 'div'){
  alert( numA / numB);
} else if (operation == 'sub'){
  alert(numA - numB);
} else {
  alert (`Enetr valid Input.`)
}
}

calc(5, 3, 'add'); // 8
calc(3, 7, 'sub'); // -4
calc(3, 3, 'mul'); // 9
calc(10, 5, 'div'); // 2


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

// isLeapYear (2005);
// isLeapYear(2021);
// isLeapYear(2000);

function isLeapYear (number){
if(number % 400 == 0 ||  number % 4 == 0){
  alert(`${number} is a Leap year`)
} else {
  alert(`${number} is not a Leap year`)
}
}


isLeapYear(2010) // not a leap year
isLeapYear(2008) // leap year

//6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.

function getFactorial (number){
  let factorial = 1;
  for(let i = number; i >= 1; i--){
    factorial = factorial * i;
  }
  alert (factorial);
}

getFactorial(6); 
getFactorial(10); 




//Voting Age


// votingAge( 34);
// votingAge( 5);
// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/


// - Write a Function Decleration
function convertToString (number){
  return toString(number);
  }

  

// - Write a Function Expression
let convertToString = function (number){
  return toString(number);
}
 

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (number) => toString(number);

// - Write an Arrow Function with curly brackets
let convertToString = (number) => {
  return toString(number);
}


// - Execute the function

convertToString(21);

// - Execute the function and store the return value in a variable.
 let output = convertToString(21);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne (num){
  return num + 1; 
}

// - Write a Function Expression
let addOne = function (num){
  return num + 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = num => num + 1;

// - Write an Arrow Function with curly brackets
let addOne = (num) =>{
 return num + 1;
};

// - Execute the function

addOne(5);

// - Execute the function and store the return value in a variable.

let result = addOne(5);

// - What is the typeof returnValue
//typeof returnValue is "number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne (num){
  return num - 1;
}

// - Write a Function Expression
let substractOne = function (num) {
  return num - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = num => num - 1;



// - Write an Arrow Function with curly brackets

let substractOne = (num) => {
  return num - 1;
}


// - Execute the function

substractOne(5);

// - Execute the function and store the return value in a variable.
let result1 = substractOne(5);


// - What is the typeof returnValue
//typeof returnValue is "number"


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum (a, b){
  return a + b; 
}

// - Write a Function Expression
let sum = function (a, b) {
  return a + b; 
}


// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;


// - Write an Arrow Function with curly brackets
let sum = (a,b) => {
  return a + b;
}




// - Execute the function

sum(3,4);

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
//typeof returnValue is "number"


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square (num) {
  return num * num;
}

// - Write a Function Expression
let square = function (num) {
  return num * num;
}


// - Write an Arrow Function without curly brackets(if possible)
let square = num => num * num;


// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num;
}
  



// - Execute the function

square(5);

// - Execute the function and store the return value in a variable

let result3 = square(5);

// - What is the typeof returnValue
//typeof returnValue is "number"


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater (x, y){
if(x > y){
  return;
} else{
  return;
}
}

// - Write a Function Expression
let isGreater = function(x, y) {
  if (x > y){
    return true;
  } else {
    return false;
  }
}


// - Write an Arrow Function without curly brackets(if possible)
// let isGreater = 

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if (x > y){
    return true;
  } else {
    return false;
  }
};


// - Execute the function

isGreater(6,2);

// - Execute the function and store the return value in a variable
let greaterNum = isGreater(6,2);
// - What is the typeof returnValue
//typeof returnValue is "boolean"


/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven (num){
  if (num % 2 === 0){
    return "Number is Even";
  } else {
    return "Number is Odd"
  }
}

// - Write an anonymous Function Expression
let oddOrEven = function (num){
  if (num % 2 === 0){
    return "Number is Even";
  } else {
    return "Number is Odd"
  }
}

// - Write an named Function Expression



// - Write an Arrow Function without curly brackets (hint: use ternary operator)


// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => {
  if (num % 2 === 0){
    return "Number is Even";
  } else {
    return "Number is Odd"
  }
}


// - Execute the function

oddOrEven(5);

// - Execute the function and store the return value in a variable

let result4 = oddOrEven(5);

// - What is the typeof returnValue
//typeof returnValue is "string"


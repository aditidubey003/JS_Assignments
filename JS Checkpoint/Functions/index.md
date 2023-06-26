1. What is the difference between the two sum function given below?

// first
function sum(a, b) {
  return a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}

first function returns sum, the other function returns undefined.

2. If we store the returned value of both functions above in variable first and second what will be the value of first and second.
Value of first is sum of a and b. Value of second is undefined.

3. What will be the output when you call above sum function (first) with three parameter like sum(12, 24, 35). Explain why?
36, the extra argument is ignored by the function.

4. Can you store the first sum function in a variable named add. If yes why? If no why?
Yes, because functions are object.

5. Declare a function named sayHello the accepts a parameter name and returns the name like Hello Arya.

6. What will be the output of the function below and why?
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}

showMessage();


7. What will be the output for Output1 Output2 and Output3 in the code below.
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}

alert(userName); // John

showMessage(); //  'Hello, John'

alert(userName); // John
8. What is a Anonymous Function give example of three functions.
Function without name is anonymous function.

let sum = function (a, b) {
  return a + b;
};

let pow = (a, b) => {
  return a ** b;
};

let sayHello = (name) => `Hello ${name}`;
9. Can function declaration be a Anonymous Function? Explain
Name is required in function declaration to call the function later.

10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
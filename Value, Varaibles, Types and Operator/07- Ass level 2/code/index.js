/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/

let user = prompt("Enter your Name");
alert(user);
let userName = user;
console.log(user, '1');
console.log(userName, '2');
let age = 22, isLearning = true;
user = 'John';
console.log(user, '3');
console.log(userName, '4');


// Confusion in above


/*
2.Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/

let numA = Number(prompt("Enter first No."));
let numB = Number(prompt("Enter Second No."));
let sum  = numA + numB;
alert(sum);

// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?
for(let c = 0; c <= 10;c = c + 2){
    console.log(c, "value of c")
}

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.
for(let i = 1; i <= 10; i++){
    if( i % 2 !== 0){
        console.log(i, "odds");
    }
}

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)
let string = "";
let i = 5;
while(i >= 0){
    string = string + i;
    console.log(string);
    i--;
}
// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)
let stringOutput = "";
let  a = 10;
while(a >= 0){
    if(a % 2 == 0){
        stringOutput = stringOutput + a;
        console.log(stringOutput); 
    }
    a--;
}


// Comparison

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/
let num1 = Number(prompt("Enter first1 No."));
let num2 = Number(prompt("Enter Second No."));




if (typeof num1 !== "number" || typeof num2 !== "number"){
    alert("Enter a valid value");
} else if (num1 == num2){
    alert(true);
} else{
    alert(false);
}

//Table of 3

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9

let product = 1;

for(let i = 1; i <= 10; i++){
    product = 3  * i;
    console.log(`3 * ${i} = ${product}`);
}

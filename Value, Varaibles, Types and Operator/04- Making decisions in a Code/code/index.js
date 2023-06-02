// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt(`Enter the number`));

if( num % 2 === 0){
alert(`Number is even`)
}else{
alert(`Number is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt(`Enter first number`));
let num2 = Number(prompt(`Enter second number`));


if( num1 > num2 ){
  alert(`${num1} is greater than ${num2}`)
  }else{
  alert(`${num2} is greater than ${num1}`)
  }


// 3. Convert the above code using`?` terniary operator

num1 > num2 ?  alert(`${num1} is greater than ${num2}`) : alert(`${num2} is greater than ${num1}`)



4. /*Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"*/

  //By else if

let houseName = prompt(`Enter house Name`)

// if(houseName === "stark"){
//   console.log("Winter is coming")
// } else if (houseName === "lannister"){
//   console.log("A lannister always pays his debt")
// } else{
//   console.log( "All men must die")
// }

// 5. Convert the above code using`?` terniary operator

houseName === "stark" ? console.log("Winter is coming"):
 houseName === "lannister" ? console.log("A lannister always pays his debt"): 
console.log( "All men must die")






// Switch







// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

// February - 28
// January, March, May, July, August, October , december - 31
// all left are -30
 
let month = prompt (`Enter the month name`)

switch (month) {
  case ("January" || "March" || "May" || "July" || "August" || "October" || "December"):
    alert(`It has 31 days`);
    break;
   case ("April" || "June" || "September" || "November"):
   alert(`It has 30 days`);
   break;
   case ("February"):
    alert(`It has 28 days`);
    break;
   default:
    alert(`Enter the Months only`);
    break;
}













/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/



//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/




/*If else*/

let marks = Number(prompt('Enter your marks'))
if(marks > 100){
  alert(`Marks can't be greater than 100`);
} else if (marks > 80 && marks < 100) {
  alert(`Grade A`);
} else if (marks > 50 && marks < 80){
  alert(`Grade B`);
} else if (marks > 30 && marks < 50){
  alert(`Grade C`);
} else {
  alert(`Grade D`);
}



/*Switch*/
//We cannot use relational expressions in switch case.
// Relational expressions (<, > ,<=, >=)



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCondition = prompt("How's the Weather Outside ?" );

if( weatherCondition === "sunny"){
  alert(`Wear a T-shirt`);
} else if (weatherCondition === "rainy"){
  alert(`Don't forget to take your raincoat`);
} else if (weatherCondition === "hot"){
  alert(`Get a hanky`)
} else if (weatherCondition === "freezing"){
  alert(`Get your sweeter on`)
} else {
  alert(`Not a valid input`)
}


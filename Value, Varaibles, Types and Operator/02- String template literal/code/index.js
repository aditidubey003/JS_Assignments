//  Template literal
let firstName = "Arya";
let lastName= "Stark";
/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.
- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
*/
const userName = `Aditi Dubey`;
let bio =  `Learning to code`;


/* Do the following using `+` 
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/

alert("I am"  + " " + userName + " " + "and my bio is" + " " + bio );
/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/

alert(`I am ${userName} and my bio is ${bio}`);


let amount = 200 ;
let taxPercent = 10;
/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/
alert(`The total amount is ${amount}
the tax amount is ${(amount * taxPercent) / 100}`);



/* Use double quote and escape character:(escape character is \n (backSlash))
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/

alert(`The total amount is ${amount} \n the tax amount is ${(amount * taxPercent) /100}`)
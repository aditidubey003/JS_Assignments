// Values & operators


//What will be the output of the code given? Explain with reason.
let sum = prompt(`What will be the result of 12 + 12?`);

if (sum == 24) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}

//  This will alert the message (you're right) if the output will be equal to 24 otherwise will display the message (Sorry you're wrong)



// 2. If we change sum == 24 to sum === 24 in the code snipped above will the output change?
// In strict mode since we have not explicitly converted our prompt into number (Note- prompt returns string) so it will alert (`Sorry you are wrong!`)



// If yes what will be the new output and why?
// it will alert (`Sorry you are wrong!`)

// If no why?

// 3. What will be the output if we replace == with ||?
// since or operator || returns first truthy Value, it will return (`Hurray 🔥 You are right!`);

// 4. What will be the output if we replace == with &&?
// since or operator || returns first falsy Value, it will return (`Hurray 🔥 You are right!`);

// 5. What will be the output if we change the sum == 24 to String(sum == 24) like given? Explain why?

let sum = prompt(`What will be the result of 12 + 12?`);

if (sum == 24) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}

// It will result in (`Hurray 🔥 You are right!`)



// 6. What will be the output of the code given? Explain why?

let sum = prompt(`What will be the result of 12 + 12?`);

if (String(sum != 24)) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}



// It will result in (`Hurray 🔥 You are right!`)

// 7. In which of the following case implicit type conversion will take place and why? Write output each code snippet.
21 + prompt('Enter a number');

// the result will be a string



prompt('Enter first number') +
  prompt('Enter second number');

  // the result will be a string



function sum(a, b) {
  return a + b;
}

'21' + sum(21, 10);

// the result will be a '2131'



function sum(a, b) {
  return a + b;
}

alert('Hello') + sum(10, 10); // what will this return
// NaN

undefined + 21;
// NaN

44 && 'Hello' && 'Arya' + 'Stark' || 100;
// 'AryaStark'

// What will be the output of code below?
alert( null || 2 || undefined );

// first truthy value - 2

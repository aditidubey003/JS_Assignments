// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector("h1");

// Check the typeof heading and log it.
console.log(typeof heading);

// Change the color of heading to black.
heading.style.color = "black";

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll("hr");
console.log(allHrs);
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/

let allHrsArray = Array.from(allHrs);
console.log(allHrsArray);
// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.forEach((element) => {
  element.style.border = "1px solid tomato";
});

// Change the background of all the hr to "antiquewhite" using for of loop.
allHrsArray.forEach((element) => {
  element.style.background = "antiquewhite";
});

// Change the 'border-radius' of all the hr to "5px" using array.
allHrsArray.forEach((element) => {
  element.style.borderRadius = "5px";
});

// Change the alignment of the heading(h1) to center.
heading.style.textAlign = "center";

// Change the font size of the heading to 3rem.
heading.style.fontSize = "3rem";

// Change the border of hr with class 'image' to `2px solid purple`
// First choose all the hr with class image, then use forEaxh for selecting all elements.

let allImageHR = document.querySelectorAll("hr.image");
allImageHR.forEach((element) => {
  element.style.border = `2px solid purple`;
});

// Hide the box number 17 (last box).
// To hide the box we will use display: none
let lastBox = document.querySelector(".seventeen");
lastBox.style.display = "none";

// Change the border of all the hr element from solid to dashed type
allHrsArray.forEach((element) => {
  element.style.border = "dashed";
});

// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p");

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText =
  "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";

// Remove all the elements from box 1
let box1 = document.querySelector(".one");
box1.innerHTML = "";

// Replace all the elements inside box 1 with the para (you created above)
box1.append(para);

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/

let box16 = document.querySelector(".sixteen");

console.log(box16.parentNode, "parentNode");
console.log(box16.childNodes);
console.log(box16.previousSibling);
console.log(box16.nextSibling);
console.log(box16.firstChild);
console.log(box16.lastChild);
console.log(box16.previousElementSibling);
console.log(box16.nextElementSibling);
console.log(box16.firstElementChild);
console.log(box16.lastElementChild);

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

// let box2 = document.querySelector('.two')
// let p1 = document.createElement('p')
// p1.innerText = "Append inserts as last child";

// box2.append(p1);

// Another Method (By TeXtNodes)
let box2 = document.querySelector(".two");
let p1 = document.createElement("p");
let text = "Append inserts as last child";
p1.append(text);
box2.append(p1);

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let box3 = document.querySelector(".three");
let p3 = document.createElement("p");
let text1 = "Prepend inserts as first child";
p3.append(text1);
box3.prepend(p3);

// Change the border of box 4 to '1px solid black'
let box4 = document.querySelector(".four");
box4.style.border = "1px solid black";

// Change the border radius of box 5 to 10px.
let box5 = document.querySelector(".five");
box5.style.borderRadius = "10px";

// Change the text color of box 6 to black.
let box6 = document.querySelector(".six");
box6.style.color = "black";

// Change the font size of the para inside box 1 to 0.8rem.
let para1 = document.querySelector(".one p");
para1.style.fontSize = "0.8rem";

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue

let allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((elm, index) => {
  if ((index + 1) % 2 !== 0) {
    return (elm.style.background = "aliceblue");
  }
});

//Another Method
// let allBoxes = document.querySelectorAll('.box');
// Array.from(allBoxes);
// console.log(allBoxes);

// add a class named "awesome-box" to the box 6 using classList property of DOM element.
box6.classList.add("awesome-box")

// Using the toggle classList property toggle the class `awesome-box` from box 2
box2.classList.toggle('awesome-box')

// Using the remove classList proeprty remove the class `awesome-box` from box 4
box4.classList.remove('awesome-box')

// Change the background of the body to bisque
document.body.style.background = "bisque"

// Create a button and store it in a variable named 'btn'
let btn = document.createElement('button')

// textContent of the button should be 'Click Me'
btn.textContent = 'Click Me';
console.log(btn)

// Change the background of the btn to 'oldlace'
btn.style.backgroundColor = 'oldlace';

// Change the font size of the btn to 1rem
btn.style.fontSize = "1rem"

// Change the border of the btn to '1px solid black'
btn.style.border = '1px solid black';

// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = '0.5rem 1rem'

// Append the btn in box number 9
let box9 = document.querySelector('.nine')
box9.append(btn);

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm = document.createElement('img')
imgElm.src = 'data:image/jpeg;base64,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'
// Select the box 7 using class seven
let box7 = document.querySelector('.seven')
// Remove all the elements form box seven
box7.innerHTML = "";
// Append the imgElm to the box no 7
box7.append(imgElm)
// Change the width and height of the image to `100%`
imgElm.style.width = '100%';
imgElm.style.height = '100%';
// Create an input element
let input = document.createElement('input')
// Change the placeholder property of the input element to "Enter you email!"
input.placeholder = "Enter your email"
// Append the input element to the box 5 you selected above
box5.append(input)
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1 = document.createElement('a')
a1.textContent = 'AltCampus';
let a2 = document.createElement('a')
a2.textContent ='Google';

// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`

a1.href = 'https://altcampus.school';
a2.href =  'https://google.com';

// Append both the elements to box 5 you selected above.
box5.append(a1, a2)
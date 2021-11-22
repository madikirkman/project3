/*console.log("Hello MEJO 187");

let array = ["Bob", "Steve", 10];

//String
let className = "Foundation of Interactive Media";

//Number
let classSize = 15;

//Boolean
let isRemote = false;

//Array
let roster = ["Christian", "Madi", "Adrian", "Nina"];

//Object
let mejo = {
  name: "Foundations of Interactive Media",
  size: 0,
  isRemote: false,
  roster: ["Christian", "Madi", "Adrian", "Nina"],
};

*/

/*
Larger
Comments


let x = 4;
let y = 2;

if (x === y) {
  console.log("It is equal!");
} else if (x > y) {
  console.log("It greater than.");
} else {
  console.log("No cases matched.");
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function multiply(x, y) {
  return x * y;
}

let product = multiply(2, 3);

*/
/* Rotating an image
function handleScroll() {
  console.log(window.scrollY);
  document.querySelector(
    "img"
  ).style = `transform: rotate(${window.scrollY}deg)`;
}
*/

let button = document.querySelector("button");

let aside = document.querySelector("aside");

function toggleModal() {
  aside.classList.toggle("active");
}

// Wire
button.addEventListener("click", toggleModal);
aside.addEventListener("click", toggleModal);

first = "Madi";
last = "Kirkman";

console.log(first + " " + last);

//telling it to go find button on page
var button = document.querySelector("button");
//for multiple buttons, do var buttons = document.querySelectorAll("button");
//for specific button, var button = document.querySelector(".special-button");
function logName() {
  console.log(first + " " + last);
}

function appendName() {
  let p = document.createElement("p");
  p.innerText = first + " " + last;
  document.body.appendChild(p);
}
button.addEventListener("click", appendName);

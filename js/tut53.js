console.log("This is tutorial 53");

// The repeated code can be solve by adding a function

function greet(name) {
  console.log(name + " is a very good boy.");
}

// "You are awesome!" this is a default value

function wish(name, greetText = "You are awesome!") {
  console.log(greetText + " " + name);

  console.log(name + " is a very good boy.");
}

function sum(a, b, c) {
  let d = a + b + c;
  return d;

  // code will not execute after return
}

let name = "Aditya";
let name1 = "Adi";
let name2 = "Ramesh";
let name3 = "Akhil";
let name4 = "Aandy";
let name5 = "Aanand";
let greetTextHere = "Hello!";
console.log(`${name} is a good boy.`);
console.log(name + " is a very good boy.");
greet(name1);
greet(name2);
greet(name3);
greet(name4);
greet(name5);

wish(name, greetTextHere);
wish(name1, greetTextHere);
wish(name2, greetTextHere);
wish(name3, greetTextHere);
wish(name4, greetTextHere);
wish(name5);

let returnVal = sum(1, 2, 3);
console.log(returnVal);

// console.log(name1 + " is a very good boy.");
// console.log(name2 + " is a very good boy.");
// console.log(name3 + " is a very good boy.");
// console.log(name4 + " is a very good boy.");
// console.log(name5 + " is a very good boy.");

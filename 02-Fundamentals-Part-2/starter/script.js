// Help to catch errors
"use strict";

/* let hasdriverlicense = false;
const passtest = true;

if (passtest) hasdriverlicense = true;
if (hasdriverlicense) console.log("i can drive");

 */

function logger() {
  console.log("My name is Hung");
}

// logger();
// logger();

function calAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calAge1(1998);

const calAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calAge2(1999);

console.log(age1, age2);

const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(2000);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} will retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Hung"));

function CutFruitPieces(fruit) {
  return fruit * 4;
}

function FruitProcessor(apples, oranges) {
  const applePieces = CutFruitPieces(apples);
  const orangePieces = CutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(FruitProcessor(1, 1));

let friend1 = "Michel";
let friend2 = "Alice";
let friend3 = "Blue";

let friends = ["Michel", "Alice", "Blue"];

// friends[2] = "Jayw";
// console.log(friends[friends.length - 1]);

// add elements
friends.push("Hung");

console.log(friends);
friends.unshift("sada");
console.log(friends);

// remoe elements
// friends.pop();
console.log(friends);

// others

console.log(friends.indexOf("Hung"));
console.log(friends.indexOf("cc"));
console.log(friends.includes("Hung"));
console.log(friends.includes("cc"));

// const ask = prompt("what the fuck");
// console.log(ask);

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// BUG

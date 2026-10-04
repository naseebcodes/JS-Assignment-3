// Arithmetic Operators

let a = 100;
let b = 20;

// Addition (+)
let result1 = a + b;
console.log(`Addition is : ${result1}`);

// subtraction (-)
let result2 = a - b;
console.log(`Subtraction is : ${result2}`);

// Mutiplication
let result3 = a * b;
console.log(`Multiplication is : ${result3}`);

// Division (/)
let result4 = a / b;
console.log(`Division is : ${result4}`);

// Modulues (%)
let result5 = a % b;
console.log(`Modules is : ${result5}`);

// Assignment Operators
// =
// +=
// -=
// *=
// /=

// equal operator
let y1 = 5;
let z1 = 10;
let result6 = (y1 = z1); // answer is 10 beacase z value asign to y
console.log(`Y = Z OR 5 = 10 = ${result6}`);

// addition and equla (+=)
let y2 = 5;
let z2 = 10;
let result7 = (y2 += z2);
console.log(result7);

// subtraction and equla (+=)
let y3 = 5;
let z3 = 10;
let result8 = (y3 -= z3);
console.log(result8);

// Multiplication and equla (+=)
let y4 = 5;
let z4 = 10;
let result9 = (y4 *= z4);
console.log(result9);

// Mululus and equla (+=)
let y5 = 5;
let z5 = 10;
let result10 = (y5 /= z5);
console.log(result10);

// Comparison Operators
let aBC = 100;
let dEF = 150;

// Equal to (==)
if (aBC == dEF) {
  console.log(true);
}

//  Strict equal to (===)
if (aBC === dEF) {
  console.log(true);
}

//  Not equal (!=)
if (aBC != dEF) {
  console.log(true);
}

//  Greater than (>)
if (aBC > dEF) {
  console.log(true);
}

//  Less than (<)
if (aBC < dEF) {
  console.log(true);
}

//  Greater than or equal to (>=)
if (aBC >= dEF) {
  console.log(true);
}

//  Less than or equal to (<=)
if (aBC <= dEF) {
  console.log(true);
}

// Expressions
// Question-1
let productName = "Tv";
let totalPrice = 699;
let quantityOftheProduct = 29;

let result11 = totalPrice * quantityOftheProduct;
console.log(`Total Price of the whole ${laptops} is : ${result11}`);

// Question-2
let fruit = "Apple";
let kilo = 5;
let perKiloPrice = 90;

let result12 = kilo * perKiloPrice;
console.log(`Total Price of the whole ${fruit} is : ${result12}`);

// Compare a number and a string using == and ===.

let num1 = 6162463;
let num2 = "6162463";

// == mean when we Compare only value does not matter data types are same or not
if (num1 == num2) {
  console.log(true); // anser is true value both are same 
}

// === three equal operators mean in condition check value as wel as must the same data type if one is  string others also string etc..,
if (num1 === num2) {
  console.log(true); // condition is false beacuse both are not same data types
}

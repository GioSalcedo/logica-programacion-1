let numberOne = parseInt(prompt("Ingrese el numero 1: "));
let numberTwo = parseInt(prompt("Ingrese el numero 2: "));
let numberThree = parseInt(prompt("Ingrese el numero 3: "));
let largestNumber = numberOne;
let smallestNumber = numberOne;


// determine the largest number
if (numberTwo > largestNumber) {
  largestNumber = numberTwo;
}

if (numberThree > largestNumber) {
  largestNumber = numberThree;
}

// determine the smallest number
if (numberTwo < smallestNumber) {
  smallestNumber = numberTwo;
}

if (numberThree < smallestNumber) {
  smallestNumber = numberThree;
}

// determine the middle number
let middleNumber;
if ((numberOne > numberTwo && numberOne < numberThree) || (numberOne < numberTwo && numberOne > numberThree)) {
  middleNumber = numberOne;
} else if ((numberTwo > numberOne && numberTwo < numberThree) || (numberTwo < numberOne && numberTwo > numberThree)) {
  middleNumber = numberTwo;
} else {
  middleNumber = numberThree;
}

// print from largest to smallest
console.log("The numbers ordered from highest to lowest are: " + largestNumber + ", " + middleNumber + ", " + smallestNumber);

// print from smallest to largest
console.log("The numbers ordered from lowest to highest are: " + smallestNumber + ", " + middleNumber + ", " + largestNumber);

if (numberOne === numberTwo && numberTwo === numberThree) {
  console.log("All three numbers are the same.")
}


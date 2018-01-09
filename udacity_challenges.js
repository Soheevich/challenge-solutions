// Write a function that takes a number as an argument and returns a string represents random characters present in a given string, number of characters of string returned should be the same with the number value of the argument.
//
// characters are just letters, spaces should not be considered.
//
// The given string
//
// "Hi all udacity students"
// Examples
//
// numChars(5); // uyhsa
// numChars(5); // hadln
// numchars(7);  // sdlituh


// My solution:
const givenString = "  THE,QUICK=+(BROWN_  FOX)/JUMPS$.  9-35 =OVER@THE!-LAZY 09  3%DOG&.";

function numchars(num = 0) {
  // It accept only positive integer as an argument
  if (!(Number.isInteger(num)) || (num <= 0)) {
    return "Invalid Number";
  }

  // It accept string with 1 letter minimum
  const str = givenString.match(/[A-Za-z]/gi);
  if (!str) {
    return "Invalid String";
  }
  const strLength = str.length;

  // It returns a self-invoke recursion
  return (function recursion(n) {
    return (n === 0) ? "" : str[Math.floor(Math.random() * strLength)].toLowerCase() + recursion(n - 1);
  })(num);
}

console.log(numchars(5));
console.log(numchars(10));
console.log(numchars());

/////////////////////////////////////////
// Awesome triangle
// You are a graphic designer and you always feel upset of how many triangles you create in the project you work on, so you got an idea :thinking: to write a javascript function that every time you call it, generates 3 values represent the angles of this triangle, but you do not need any of these angels to be less than 30 degrees, your function should return every time 3 random values represent the angles, and of course you need sum of them to be 180 every time :wink:

// for Example

// triangle(); // 60,40,80

const generateAngle = () => {
	let first = Math.floor(Math.random() * (120 - 30)) + 30,
	second = Math.floor(Math.random() * (180 - first - 30 - 30)) + 30,
	third = 180 - first - second,
	sum = first + second + third;
	return `first angle is ${first}, second angle is ${second}, third angle is ${third}, sum is ${sum}`;
};

console.log(generateAngle());

/////////////////////////////////////////
// A big random number
// Write a function that takes an array of two elements (numbers < 10) as argument, and returns a number composed of all the numbers between the two numbers with minimum and maximum numbers inclusives randomly every time you call the function, numbers that composes our returned number should be different( no repeated numbers) and number of these numbers should be the same with the numbers in all range between the maximum and minimum number in array, with minimum and maximum inclusive, the array is not sorted so no strict places for maximum or minimum number in it

// Really i have wrote tons of word “number” so it may be confusing, lets jump to examples :grinning:

// for example

// randomNum([1,5]);  // 45132
// randomNum([5,1]);  // 31452
// randomNum([0,9]); // 7429850136
// randomNum([0,9])  // 5682910347

const randomNum = (input) => {
  const max = Math.max(...input),
  min = Math.min(...input),
  recursion = (num) => {
    return num < 1 ? "" : numbers.splice((Math.floor(Math.random() * (numbers.length))), 1)[0] + recursion(num - 1);
  };
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return console.log(recursion(numbers.length));
};

randomNum([1,5]);
randomNum([3,9]);
randomNum([0,9]);
randomNum([7,3]);

/////////////////////////////////////////

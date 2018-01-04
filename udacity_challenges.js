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
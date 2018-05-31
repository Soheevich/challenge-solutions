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

//or

const generateAngle = () => {
  function final(first) {
    return (second = Math.floor(Math.random() * (120 - first)) + 30) => (third = 180 - first - second) => sum => "first angle is " + first + ", second angle is " + second + ", third angle is " + third + ", sum is " + (first + second + third);
  }
  return final(Math.floor(Math.random() * (90)) + 30)()()();
};

console.log(generateAngle());

/////////////////////////////////////////
// A big random number
// Write a function that takes an array of two elements (numbers < 10) as argument, 
// and returns a number composed of all the numbers between the two numbers with minimum and maximum numbers inclusives randomly every time you call the function, 
// numbers that composes our returned number should be different( no repeated numbers) and number of these numbers should be the same with the numbers in all range between the maximum and minimum number in array, 
// with minimum and maximum inclusive, the array is not sorted so no strict places for maximum or minimum number in it

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

randomNum([1, 5]);
randomNum([3, 9]);
randomNum([0, 9]);
randomNum([7, 3]);

/////////////////////////////////////////
// The unique string

// Write a function that can take two or more strings as arguments and returns a string represent them all , all characters should be in same order in the original string but no duplication in the returned string

// For example

// uniqueStr("abcd","ahkd") // abcdhk
// uniqueStr("rbanr","fzyrc") // rbanfzyc
// uniqueStr("every","day","a problem") // evrydapoblm
// Note: of Course you know that E and e are different characters

function uniqueStr(...theArgs) {
  let str = theArgs.join("").match(/[a-z]/gi); // Making an array of letters
  console.log(str.filter((val, i) => str.indexOf(val) == i).join("")); // Filtering only unique letters
}

uniqueStr("abcd", "ahkd") // abcdhk
uniqueStr("rbanr", "fzyrc") // rbanfzyc
uniqueStr("every", "day", "a problem") // evrydapoblm
uniqueStr("  The,QuiCK=", "+(bROwn_  FOx)", "/JUmPS$.  9-", "35 =ovER@", "tHE!-LAZY 0", "9  3%DoG&.") // TheQuiCKbROwnFxJUmPSovEtHLAZYDG

/////////////////////////////////////////
// Shift Capital
// Write a function that takes two arguments, one represents a string that contains a capital letter that can be anywhere in the string , the second argument is a number represent number of shifts of the capital letter in the string when the function is called, if the index that the capital letter should be shifted to is not present , continue shifting from the beginning :sunglasses:

// For example

// shiftCapital(Udacity,4) // daciUty
// shiftCapital(leaRning,4) // Rleaning
// shiftCapital(frienDs,6) // frienDs
// shiftCapital(frienDs,3)  // frDiens

const shiftCapital = (input, num) => {
  let i = input.search(/[A-Z]/g);
  input = Array.from(input);
  const char = input.splice(i, 1);
  i = (i + num) % input.length;
  return input.splice(0, i).join("") + char + input.join("");
};

console.log(shiftCapital("Udacity", 4)); // daciUty
console.log(shiftCapital("leaRning", 4)); // Rleaning
console.log(shiftCapital("frienDs", 3)); // frDiens
console.log(shiftCapital("frienDs", 4)); // friDens

/////////////////////////////////////////
// Write a function that takes an array of any level of nesting , the function return an array represents the original array but the flattened version of it.

// For example

// flatten([1,5,6,[2,5,[10,12,15,[]],3,8],6,7); // [1,5,6,2,5,10,12,15,3,8,6,7]

function flatten(input, i = 0, acc = []) {
  if (i == input.length) {
    return acc;
  } else {
    return Array.isArray(input[i]) ? flatten(input[i], 0, acc) : acc.push(input[i]), flatten(input, i + 1, acc);
  }
}

console.log(flatten([1, 5, 6, [2, 5, [10, 12, 15, []], 3, 8], 6, 7])); // [1,5,6,2,5,10,12,15,3,8,6,7]

// or

const flatten = array => array.join(",").match(/\d+/g).map(val => parseInt(val));

flatten([1, 5, 6, [2, 5, [10, 12, 15, []], 3, 8], 6, 7]); // [1,5,6,2,5,10,12,15,3,8,6,7]

/////////////////////////////////////////
// Write a function that takes a string as an argument and returns another string exactly like the examples below

// strManip("abcd")    // AbAc-BcBd-CdC-DD
// strManip("hello")  // HeHl-ElEl-LlLo-LoL-OO
// strManip("hi")    // HiH-II
// strManip("A")    // AA
// strManip("cAt") // CaCt-AtA-TT

const strManip = (str, i = 0, acc = []) => {
  if (i === str.length) {
    return console.log(acc.join("-"));
  }
  acc.push(str.charAt(i).toUpperCase() + str.charAt(i + 1).toLowerCase() + str.charAt(i).toUpperCase() + str.charAt(i + 2).toLowerCase());
  strManip(str, i + 1, acc);
};

strManip("abcd"); // AbAc-BcBd-CdC-DD
strManip("hello"); // HeHl-ElEl-LlLo-LoL-OO
strManip("hi"); // HiH-II
strManip("A"); // AA
strManip("cAt"); // CaCt-AtA-TT

/////////////////////////////////////////
// After they became famous, the CodeBots all decided to move to a new building and live together. 
// The building is represented by a rectangular matrix of rooms. 
// Each cell in the matrix contains an integer that represents the price of the room. 
// Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. 
// That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.
// Help the bots calculate the total price of all the rooms that are suitable for them.

// Example
// For
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':
// [[x, 1, 1, 2], 
//  [x, 5, x, x], 
//  [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For
// matrix = [[1, 1, 1, 0], 
//           [0, 5, 0, 1], 
//           [2, 1, 3, 10]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':
// [[1, 1, 1, x], 
//  [x, 5, x, x], 
//  [x, 1, x, x]]
// Note that the free room in the first row make the full column unsuitable for bots.

// Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

function matrixElementsSum(matrix) {

  // Inner function will change to null all prices of all rooms below haunted ones 
  function belowHauntedToNull(array, levelIndex, roomNum, length = matrix.length) {
    for (let i = levelIndex + 1; i < length; i++) {
      array[i][roomNum] = null;
    }
  }

  // Making copy of original array, to prevent its alteration
  let matrixCopy = matrix.slice(0),
    totalPrice = 0;

  // Looping over every room, calling belowHauntedToNull if room is haunted
  matrixCopy.forEach((level, levelIndex) => {
    level.forEach((roomPrice, roomNum) => {
      if (roomPrice === 0) {
        belowHauntedToNull(matrixCopy, levelIndex, roomNum);
      } else {
        totalPrice += roomPrice;
      }
    });
  });

  return totalPrice;
}

/////////////////////////////////////////
// You have $15 with you. You go to a shop and shopkeeper tells you price as $1 per chocolate. 
// He also tells you that you can get a chocolate in return of 3 wrappers. 
// How many maximum chocolates you can eat?

// Write a program to find solution for variable inputs. Given following three values, 
// the task is to find the total number of maximum chocolates you can eat.

// money: Money you have to buy chocolates
// price: Price of a chocolate
// wrap: Number of wrappers to be returned for getting one extra chocolate.

// It may be assumed that all given values are positive integers and greater than 1.

const chocolatesFromWrap = (wrapBonus, wrapLeft, accumulator = 0) => {
  if (wrapLeft >= wrapBonus) {
    const bonusChocolates = Math.floor(wrapLeft / wrapBonus);
    return chocolatesFromWrap(wrapBonus, (wrapLeft % wrapBonus + bonusChocolates), (accumulator + bonusChocolates));
  } else {
    return accumulator;
  }
};

const chocolatesCounter = (money, price, wrap) => {
  if (money >= price) {
    const chocolatesToBuy = Math.floor(money / price),
          totalChocolates = chocolatesFromWrap(wrap, chocolatesToBuy, chocolatesToBuy);
    return "You can eat " + totalChocolates + (totalChocolates > 1 ? " chocolates." : " chocolate.");
  } else {
    return "You don't have enough money to buy chocolates.";
  }  
};

console.log(chocolatesCounter(15, 1, 3));


/////////////////////////////////////////
// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. 
// It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. 
// The results string should not contain any parentheses.

// Example

// For string s = "The ((quick (brown) (fox) jumps over the lazy) dog)", the output should be
// reverseParentheses(s) = "The god quick nworb xof jumps over the lazy".

function reverseParentheses(str) {
  let arrFromStr = str.split("");
  let leftParenthesesIndex = [];
  
  arrFromStr.forEach((char, i) => {
    if (char === "(") leftParenthesesIndex.push(i);
    if (char === ")") {
      let firstIndex = leftParenthesesIndex.pop();
      let toReverse = arrFromStr.splice(firstIndex, i - firstIndex + 1);
      toReverse.reverse();
      arrFromStr.splice(firstIndex, 0, ...toReverse);
    }
  });
  return arrFromStr.join("").replace(/[()]/g, "");
}


console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)") === "The god quick nworb xof jumps over the lazy");


/////////////////////////////////////////
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function areSimilar(a, b) {
  let badIndexes = [],
      badNums = [];
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
          badIndexes.push(i);
          badNums.push(b[i]);
      }
  }
  if (badIndexes.length > 2) return false;
  for (let index of badIndexes) {
      if (!badNums.includes(a[index])) return false;
  }
  return true;
}


const a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
const b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279];

console.log(areSimilar(a, b)); // true


/////////////////////////////////////////
// In this kata you have to create all permutations of an input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {
  const length = string.length;
  if (length == 1) return [string];
  let outputArray = [];
  
  for (let i = 0; i < length; i++) {
    const charsArray = string.split(""),
          char = charsArray.splice(i, 1)[0],
          tempArray = permutations(charsArray.join(""));
    for (let elem of tempArray) {
      const temp = char + elem;
      if (!outputArray.includes(temp)) outputArray.push(temp);
    }
  }
  return outputArray;
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


/////////////////////////////////////////
// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 
// Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
  let leftBracesIndex = [];
      
  for (let i = 0, length = braces.length; i < length; i++) {
    if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{") {
      leftBracesIndex.push(braces[i]);
    } else if (braces[i] === ")") {
      if ( leftBracesIndex.pop() !== "(") return false;      
    } else if (braces[i] === "]") {
      if ( leftBracesIndex.pop() !== "[") return false;      
    } else if (braces[i] === "}") {
      if ( leftBracesIndex.pop() !== "{") return false;      
    }
  }
  return (!leftBracesIndex.length);
}

console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")); // false


/////////////////////////////////////////

// You and your alliance of warriors are trying to kill a monster to score points in a Kingdom vs.Kingdom(KvK) event.Each unit(both a warrior and a monster are considered a unit) has a certain number of health points(healthPoints) and attack damage value(attackDamage).When one unit attacks another, the health of the unit that is under attack is decreased by the attacker's damage value. If a unit's health points are reduced to zero or less, the unit dies and can't take part in the battle anymore.

// The skirmish between the warrior alliance and the monster proceeds in the following way:

// Each turn, you direct one of your warriors to attack the monster.
// If the monster dies, you win.
// If the monster is still alive after an attack, it counter - attacks the same warrior who attacked it in the previous step.
// If all of your warriors die, you lose.
// Find the maximum number of your warriors that will remain after defeating the monster.If it's impossible to kill a monster without losing all your warriors, return 0.

// Example

// For healthPoints = [110, 30, 50] and attackDamage = [12, 11, 20], the output should be
// allianceVersusMonster(healthPoints, attackDamage) = 2.

// One of the optimal strategies is as follows:

// Attack the monster four times with the second warrior.The monster's health will become 110 - 20 * 4 = 30, while the warrior's health will be 50 - 12 * 4 = 2.
// If you use the second warrior again immediately, it will die.Therefore, use the first warrior instead.Its three attacks will deplete the monster's health by 11 * 3 = 33 points, while the monster will respond only twice. After the third attack it will die instantly. Your first warrior's health will be 30 - 12 * 2 = 6 after the fight ends.
// In this way you are able to save both of your warriors and win the battle.
// For healthPoints = [4, 10, 10, 10] and attackDamage = [10, 1, 1, 1], the output should be
// allianceVersusMonster(healthPoints, attackDamage) = 0.

// Each of your warriors will be able to attack the monster only once because they will die after one counter - attack.Each of the attacks will reduce the monster's health by 1. Thus, after three turns, the monster will still have 1 health point but all of your warrior will be dead.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer healthPoints

// Array of at least two positive integers.healthPoints[0] corresponds to the monster's health, while all the following elements refer to warriors of the alliance.

// Guaranteed constraints:
// 2 ≤ healthPoints.length ≤ 30,
//   1 ≤ healthPoints[i]≤ 2 · 109 + 1.

//   [input] array.integer attackDamage

// Array of the same length as healthPoints, consisting of positive integers.attackDamage[0] equals the monster's attack damage, while all the following elements refer to warriors of the alliance.

// Guaranteed constraints:
// 2 ≤ attackDamage.length ≤ 30,
//   1 ≤ attackDamage[i]≤ 100.

//   [output] integer

// The maximum number of your warriors that will remain after defeating the monster, or 0 if it's impossible to kill a monster without losing all your warriors.


function allianceVersusMonster(healthPoints, attackDamage) {
  const monster = [healthPoints.splice(0, 1)[0], attackDamage.splice(0, 1)[0]];
  let proceed = true;
  while (proceed) {
    let i = healthPoints.indexOf(Math.max(...healthPoints));
    if (healthPoints[i] > monster[1]) {
      let num = healthPoints[i] / monster[1];
      if (num % 1 === 0) num--;
      else Math.floor(num);
      monster[0] -= attackDamage[i] * num;
      if (monster[0] <= 0) return healthPoints.length;
      healthPoints[i] -= monster[1] * num;
    } else {
      i = attackDamage.indexOf(Math.max(...attackDamage));
      monster[0] -= attackDamage[i];
      if (monster[0] <= 0) return healthPoints.length;
      healthPoints.splice(i, 1);
      attackDamage.splice(i, 1);
    }
    if (healthPoints.length === 0 || monster[0] <= 0) {
      proceed = false;
    }
  }
  return healthPoints.length;
}

allianceVersusMonster([11, 4, 4, 4], [1, 1, 1, 1]);



// Input:
// healthPoints: [110, 30, 50]
// attackDamage: [12, 11, 20]
// Output:
// 2
// Expected Output:
// 2

// ////

// Input:
// healthPoints: [4, 10, 10, 10]
// attackDamage: [10, 1, 1, 1]
// Output:
// 0
// Expected Output:
// 0
// ///

// Input:
// healthPoints: [10, 3, 3, 3]
// attackDamage: [2, 1, 5, 1]
// Output:
// 3
// Expected Output:
// 3
// ///
// Input:
// healthPoints: [2000000000, 2000000000]
// attackDamage: [1, 1]
// Output:
// 1
// Expected Output:
// 1
// ///
// Input:
// healthPoints: [11, 4, 4, 4]
// attackDamage: [1, 1, 1, 1]
// Output:
// 2
// Expected Output:
// 2
// ///
// Input:
// healthPoints: [10, 4, 4, 4]
// attackDamage: [1, 1, 1, 1]
// Output:
// 3
// Expected Output:
// 3
// ///
// Input:
// healthPoints: [5, 10, 10, 10]
// attackDamage: [10, 2, 2, 2]
// Output:
// 1
// Expected Output:
// 1


/////////////////////////////////////////

// Make the object from the array: { width: 10, height: 20 }

var arr = [
{name: 'width', value: 10},
{name: 'height', value: 20}
];

function toObject(arr) {
  return arr.reduce((acc, val) => (acc[val["name"]] = val["value"], acc), {});
}

console.log(toObject(arr));


/////////////////////////////////////////

// * Given string with letters A-Z:
// * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
// * You need to write a funtion which returns:
// * "A4B3C2XYZD4E3F3A6B28"
// * And this funtion will throw any error if given string is invalid.
// *
// * Explanation:
// * 1. If symbol is unique it will stay without changes
// * 2. If symbol repeats more than once, you need to add a number of repetitions after this symbol

const rle = (str) => {
  if (/[^A-Z]/.test(str)) throw new Error("String is not valid");
  const counter = { letter: "", num: 0 };
  let output = "";
  for (let char of str) {
    if (char === counter.letter) counter.num++;
    else {
      if (counter.num > 1) output += counter.num;
      counter.letter = char;
      counter.num = 1;
      output += char;
    }
  }
  if (counter.num > 1) output += counter.num;
  return output;
};

console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB") === "A4B3C2XYZD4E3F3A6B28");


/////////////////////////////////////////

// * There are the function and the object. You need to print 'word' in console.
// * How to make it without changing function's body?

function f() { console.log(this.x); }
var obj = { x: 'word' };
obj.cons = function f() { console.log(this.x); };

obj.cons();


/////////////////////////////////////////

// // Нужно написать функцию,
// // которая найдёт анаграммы среди слов и сгруппирует их:
// [ [ 'вертикаль', 'кильватер' ],
//   [ 'апельсин', 'спаниель' ],
//   [ 'австралопитек', 'ватерполистка' ],
//   [ 'кластер', 'сталкер', 'стрелка' ] ]

let input = ['вертикаль', 'кильватер',
  'апельсин', 'спаниель',
  'австралопитек', 'ватерполистка',
  'кластер', 'сталкер', 'стрелка']

const anagramm = array => {
  let arr = [...array];
  let output = [];
  arr.forEach((val, i) => {
    let tempArr = [val];
    const tempWord = val.split("").sort().join("");

    for (let j = i + 1; j < arr.length; j++) {
      if (tempWord === arr[j].split("").sort().join("")) tempArr.push(arr.splice(j--, 1)[0]);
    }
    if (tempArr.length > 1) output.push(tempArr);
  });
  return output;
};

console.log(anagramm(input));


/////////////////////////////////////////

// Написать функцию, которая преобразует строку вида:
// 'a.b.c.d' в объект { a: { b: { c: { d: null } } } }

const toObject = (str, acc = {}) => {
  acc[str.charAt(0)] = str.length > 1 ? toObject(str.substr(2)) : null;
  return acc;
}

console.log(toObject("a.b.c.d"));


/////////////////////////////////////////

// Написать функцию, которая работает следующим образом:

// sum(1)(2)(3)(); // вернёт 6
// sum(10)(1)(); // вернет 11
// и тд

function sum(x) {
  let args = x;
  return function recursion(y = "stop") {
    if (y !== "stop") {
      args += y;
      return recursion;
    } else return args;
  }
}

console.log(sum(1)(2)(3)()); // 6
console.log(sum(10)(1)()); // 11
console.log(sum(1)(2)(3)(4)(5)(6)()); // 21
console.log(sum(10)()); // 10


///////////////////////////////////

// Robots battle

function fight(robot1, robot2, tactics) {
  let fastest,
    slowest;
  if (robot1.speed > robot2.speed || robot1.speed === robot2.speed) {
    fastest = Object.assign({}, robot1);
    slowest = Object.assign({}, robot2);
  } else {
    fastest = Object.assign({}, robot2);
    slowest = Object.assign({}, robot1);
  }
  let winner;

  while (fastest.tactics.length > 0 || slowest.tactics.length > 0) {
    let currentTactics;
    console.log("************ NEW TURN **********");
    if (fastest.tactics.length > 0) {
      console.log(`=== ${fastest.name}'s turn ===`);
      console.log(`${fastest.name} health is ${fastest.health}`);
      console.log(`${slowest.name} health is ${slowest.health}`);
      currentTactics = fastest.tactics.shift();
      slowest.health -= tactics[currentTactics];
      console.log(`${fastest.name}'s tactics is ${currentTactics} with ${tactics[currentTactics]} damage`);
      if (slowest.health <= 0) {
        winner = fastest.name;
        break;
      }
      console.log(`after attack: ${slowest.name}'s health is ${slowest.health}`);
    }

    if (slowest.tactics.length > 0) {
      console.log(`=== ${slowest.name}'s turn ===`);
      console.log(`${slowest.name} health is ${slowest.health}`);
      console.log(`${fastest.name} health is ${fastest.health}`);
      currentTactics = slowest.tactics.shift();
      fastest.health -= tactics[currentTactics];
      console.log(`${slowest.name}'s tactics is ${currentTactics} with ${tactics[currentTactics]} damage`);
      if (fastest.health <= 0) {
        winner = slowest.name;
        break;
      }
      console.log(`after attack ${fastest.name}'s health is ${fastest.health}`);
    }
  }

  if (winner) return `${winner} has won the fight.`;
  else if (fastest.health > slowest.health) return `${fastest.name} has won the fight.`;
  else if (slowest.health > fastest.health) return `${slowest.name} has won the fight.`;
  else return "The fight was a draw.";
}


const robot1 = { "name": "Rocky", "health": 100, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] },
  robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] },
  tactics = { "punch": 20, "laser": 30, "missile": 35 };

fight(robot1, robot2, tactics);
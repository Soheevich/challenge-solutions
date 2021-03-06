// Binary search

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    // console.log('===Loop Start===');
    // console.log('low', low);
    // console.log('high', high);
    // console.log('mid', mid);
    // console.log('guess', guess);
    // console.log('===Loop End===');

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const myList = [1, 3, 5, 7, 9, 11];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));


// Selection sort

const findSmallestIndex = (arr) => {
  let smallestIndex = 0;
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallestIndex = i;
      smallest = arr[i];
    }
  }

  return smallestIndex;
};

const selectionSort = (arr) => {
  const arrayCopy = [...arr];
  const sortedArray = [];

  arr.forEach((_) => {
    const smallestIndex = findSmallestIndex(arrayCopy);
    const smallest = arrayCopy.splice(smallestIndex, 1);

    sortedArray.push(...smallest);
  });

  return sortedArray;
};


// Recursive sum

const sum = (array) => {
  if (array.length === 1) return array[0];
  else return array[0] + sum(array.slice(1));
};


// Recursive biggest number search

const biggestNumber = array => {
  const num = array[0];

  if (array.length === 1) {
    return num;
  } else {
    const nextNum = biggestNumber(array.slice(1));

    return num > nextNum ? num : nextNum;
  }
};


// Quick sort

const quickSort = array => {
  if (array.length < 2) {
    return array;
  } else {
    const arrayCopy = [...array];
    const randomIndex = Math.floor(Math.random() * array.length);
    const pivot = arrayCopy.splice(randomIndex, 1)[0];
    const less = arrayCopy.filter(val => val <= pivot);
    const greater = arrayCopy.filter(val => val > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};


// Merge sort

const merge = (arrayLeft, arrayRight) => {
  const finalArray = [];

  while(arrayLeft.length && arrayRight.length) {
    if (arrayLeft[0] < arrayRight[0]) {
      finalArray.push(arrayLeft.shift());
    } else {
      finalArray.push(arrayRight.shift());
    }
  }

  return [...finalArray, ...arrayLeft, ...arrayRight];
};

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
};

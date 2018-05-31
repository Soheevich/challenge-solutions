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



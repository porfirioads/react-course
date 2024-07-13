const array = [];

// Push modifies the original object.
array.push(1);
array.push(2);
array.push(3);
array.push(4);

// Its better use spread.
const array2 = [...array, 5];

// map() creates a new array calling a function for all items.
const array3 = array2.map((value) => value * 2);

console.log(array);
console.log(array2);
console.log(array3);

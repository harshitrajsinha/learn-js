// Map()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Testing parameters of callback function
myNums.map((elem, index, thisArray) => {
  console.log(elem);                    // result: 1 -> 2 ... -> 10
  console.log("index", index);          // result: 0 -> 1 -> 2 ... -> 9
  console.log("thisArray", thisArray); // result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (print 10 times)
})

// forEach()  
const newNums = myNums.forEach( (nums) => {
  return (nums + 1);
})
console.log(newNums);   // result: undefined
// The way to get through this is to declare a new array and then push the elements into that array within forEach loop

// Map()
const newMapNums = myNums.map( (nums) => {
  return (nums + 1);
})
console.log(newMapNums); // result: [2, 3, 4,  5,  6, 7, 8, 9, 10, 11]

// ## NOTE: even though it seems that we are returning each element, but instead each element is pushed to the array and the final array is returned

// Chaining using map

const newChainedMap = myNums
.map((nums) => {
  return (nums + 1);   // [2, 3, 4,  5,  6, 7, 8, 9, 10, 11]
})
.map((nums) => {
  return (nums * 10);   // [20, 30, 40,  50,  60, 70, 80, 90, 100, 110]
})
.filter((nums) => {
  return (nums > 50);
})
console.log(newChainedMap); // result: [60, 70, 80, 90, 100, 110]

// Passing function to map()

const cubes = myNums.map(findCube);
console.log(cubes)
function findCube(elements){
  return Math.pow(elements, 3);
}

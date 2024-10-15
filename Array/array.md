# Definition
* Collection of elements with same or different data-types.
* Resizable, mutable
* type - object
* Increasing length of array adds empty slots and has value as 'undefined' and decreasing the length deletes the array element from end that does not fit into the length. The empty slots are ignored by forEach() but not by for loop
```javascript
const myArr = [1,2];
myArr.length = 5;
console.log(myArr);
console.log(myArr[3]);
```

# Array methods
* Some important array methods -
> Array.from() - Used to create an array from iterable input; takes two params - 1) iterable input to be converted to array (if non-iterable like 2 or true, then [] is returned) and 2) optional callback function to perform any operation on each element of the array.
* Some array methods mutate the original array. However, we can use alternative non-mutable methods -
  
 ![mutable vs non-mutable array methods](https://github.com/harshitrajsinha/learn-js/blob/main/Assets/Screenshot%202024-08-25%20092701.png?raw=true)

 * To avoid mutability of array methods, one alternative is to create a copy of the original array using slice() or spread operator and then apply methods on them.

# Slice [[STL]](https://github.com/harshitrajsinha/learn-js/blob/b6bba150739e76730e61229f862991ce4ff9d9bf/STL/Arrays/slice.ts) vs Splice
* Slice creates a **shallow copy** of a portion of original array by taking into account the start and end index (end is excluded). If 2nd index is not mentioned then all elements are included till the end of array. Negative index can also be given as input, in which the count starts from the back of array.
* Splice creates a new array by taking out / removing the portion of the array from the original array it is requested. Hence original array also gets modified. splice() can also be used to **insert elements into array**. End index is included in case of splice.
```javascript
const myNumArr = [10, 11, 12, 13, 14];
const mySliceArr = myNumArr.slice(1,3);
console.log(myNumArr);    // [ 10, 11, 12, 13, 14 ]
console.log(mySliceArr);  // [ 11, 12 ]
const mySpliceArr = myNumArr.splice(1,3);
console.log(myNumArr);    // [ 10, 14 ]
console.log(mySpliceArr);  // [ 11, 12, 13 ]
```

# Map
* map method in javascript is used to create a new array where each element of the new array will be tranformed values of the original array by performing some operations.
* The original array remains intact.
* map method in javascript accepts a callback function and applies the operation on each element of the array.
* the callback function could have three parameters [value (each element of array), index (index of the elements of array), and the array itself]
* map method in javascript acts like forEach but it returns data which is an array. forEach does not return any value. 
* Since map returns an array we can do chaining with the help of map
* It accepts a callback function, hence we can pass a complete function as well, this function will be called as callback function. That function will internally take the iterated array
* map method is used for array transformation such as doubling the values of array, cubing the values of array etc.
```javascript
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

// some() ?
// ## NOTE: even though it seems that we are returning each element, but instead each element is pushed to the array and the final array is returned
```
```javascript
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
```

# Copying array
* Reference copy - Variable storing the array is assigned to another variable => both variables hold the reference to same array and modifying the array using any of the two will modify the original array (both top-level and nested properties/elements).
```javascript
const arr = [1, 2, 3];
const newArr = arr;
```
* Shallow copy - Copy of the original variable is created in which the properties/elements and their orders are same. Top-level elements are duplicated whereas reference is created for nested elements. => Modifying top-level properties/elements through new array will not affect the original but modifying the nested elements will affect the original as well. Ways to create -> Array.from(), Array.slice()
```javascript
const arr = [1,2,3];
const newArr = Array.from(arr);

const str = 'harshit';
const strArr = Array.from(str);
```

# Modifying

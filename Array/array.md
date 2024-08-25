# Definition
* Collection of elements with same or different data-types.
* Resizable, mutable
* If the length of array in JS is larger than the number of elements present in them, such array contains empty slots and has value as 'undefined'
  `const myArr = [1,2]; myArr.length = 5; console.log(myArr); console.log(myArr[3]);`

# Slice vs Splice
* Slice creates a **shallow copy** of a portion of original array by taking into account the start and end index (end is excluded). If 2nd index is not mentioned then all elements are included till the end of array. Negative index can also be given as input, in which the count starts from the back of array.
* Splice modifies the original array by taking out the portion of the array it is requested. splice() can also be used to **insert elements into array**. End index is included in case of splice.
* See example: slice vs splice

# Map
* map method in javascript is used to create a new array where each element of the new array will be tranformed values of the original array by performing some operations.
* The original array remains intact.
* map method in javascript accepts a callback function and applies the operation on each element of the array.
* the callback function could have three parameters [value (each element of array), index (index of the elements of array), and the array itself]
* map method in javascript acts like forEach but it returns data which is an array. forEach does not return any value. 
* Since map returns an array we can do chaining with the help of map
* It accepts a callback function, hence we can pass a complete function as well, this function will be called as callback function. That function will internally take the iterated array
* map method is used for array transformation such as doubling the values of array, cubing the values of array etc.
* See example: map()

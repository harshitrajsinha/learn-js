/* There is no built-in method to check whether an object is non-array and non-null object, like Array.isArray(). Create a method/function to do the same. */
const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const arrayType = [1,2,3,4,5];
const objectType = {
    'one': 1,
    'two': "two",
    'three': true
}
console.log(isObject(arrayType)); //false
console.log(isObject(objectType)); //true

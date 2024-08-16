// Convert a number to binary

const to_binary = num.toString(2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// setTimeout - used to execute a process after certain time interval

const print_my_name = function(){   // this type of syntax for writing function is used when we want to give reference of the function to elsewhere
  console.log("harshit");
}
setTimeout(print_my_name, 2000); // execute print_my_name() after an interval of 2secs.
// Note: Above we are giving reference of the function
// setTimeout(print_my_name(), 2000);  :- this will execute the function immediately

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Comma operator

/* Comma operator is used to evaluate each of the operands, if it is an expression, seperated by comma, from left to right and then return the value of last operand.*/
const myNum = (2,3);
console.log(myNum); // 3

/* Use-case: */
// 1) To evaluate expression in single line (not professional) */
    let x = 2;
    x = (x++, x); // since there is no expression to be evaluated so x++ will increment the value of x by 1. The value of x in second operand will become 3.
    console.log(x); // 3 
// 2) Multiple assignments
    const n = ((a=2), (b=3), (c=4));
    console.log(n); // 4   Note: if the value wouldn't be stored in 'n' then it will only be considered as assignment

    if((a=2), (b=3), (c=4)){   // if(4){...}
      console.log("here");
    }
// 3) for loop with multiple expression
    for (let i = 0, j = 10; i < j; i++, j--) {    
      //comma operator is only in the third set of operation (i++, j--); the first set of operand is not comma operator. in the context of the for loop, the value returned by the comma operator is not actually used or stored anywhere. The primary purpose of using the comma operator here is to execute multiple expressions (in this case, both i++ and j--) within the loop's update phase.
        console.log(`i: ${i}, j: ${j}`);
    }
// 4) function(1,2){...}  here comma operator is not used, rather it is typical comma used to seperate two values

/*Comma operator is typically used in very specific scenarios where its benefits outweigh the potential downsides of reduced code clarity like two-pointers in for loop*/

/************/

// Trick question --
const num = (2, console.log("here"));
console.log(num);
//here
//undefined

/*************/

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// includes():

/* 
The includes() method in string determines whether a given set of character is present in the string to be searched or not. This is case sensitive.
The includes() method of Array determines whether an array includes a certain element or not and it searches for complete element, even if it is array of string.
*/

// It accepts two params - char/elem to search for, position to start searching
[1, 2, 3].includes(3, 3); // false
["1", "2", "3"].includes(3); // false
"something 3 something".includes(3) // true
"something 3 something".includes("3") // true

// includes() of string converts the passed value to a string before searching.
str.includes(undefined) // searches for "undefined"


/***********/

// Trick question --
const sentence = 'Quick brown fox jumps over the lazy dog.';
console.log(sentence.includes('quick')); // false
const sentence_two = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence_two.includes('the')); // true  [the is present as the last third word]
console.log(sentence_two.includes(undefined)); // searches for "undefined"

/***********/

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Object - Shallow copy vs Deep copy:

/* 
In shallow copy, a copy of the object, duplicate top-level properties and reference nested objects, is created in heap memory and the reference of this newly created object in the memory is given to the new variable. Hence, any change by the new variable to the object affects the newly created object and not the original one, except the nested objects. This is 
In deep copy,  a copy of the object, duplicate top-level properties and nested objects, is created in heap memory and the reference of this newly created object in the memory is given to the new variable. Hence, any change by the new variable to the object affects the newly created object and not the original one, including the nested objects.

NOTE - 
1) Object can be duplicated using - spread operator [shallow copy], assign() [shallow copy], JSON.parse(JSON.stringify()) [deep copy], library like Lodash's _.cloneDeep [deep copy]
2) When an object is assign to another variable using '=' operator then the reference of the original object is shared to the newly created variable. Hence, the original object can be changed using either of the variables. The modification affects the top-level properties as well as nested objects.
3) Nested objects gets modified whether the duplicate object is created using shallow copy or deep copy because for nested objects, its reference is stored
*/

// Shallow copy
const testObj = {
    id: 1,
    name: {
        firstName: "Harshit",
        lastName: "Raj"
    }
}
const newTestObj = {...testObj};
newTestObj.id = 2;
newTestObj.name.lastName = "Sinha";
console.table([testObj, newTestObj]);
┌─────────┬────┬─────────────────────────────────────────────┐
│ (index) │ id │ name                                        │
├─────────┼────┼─────────────────────────────────────────────┤
│ 0       │ 1  │ { firstName: 'Harshit', lastName: 'Sinha' } │
│ 1       │ 2  │ { firstName: 'Harshit', lastName: 'Sinha' } │
└─────────┴────┴─────────────────────────────────────────────┘

// Deep copy -
const testObj = {
    id: 1,
    name: {
        firstName: "Harshit",
        lastName: "Raj"
    }
}
const newTestObj = JSON.parse(JSON.stringify(testObj));
newTestObj.id = 2;
newTestObj.name.lastName = "Sinha";
console.table([testObj, newTestObj]);
┌─────────┬────┬─────────────────────────────────────────────┐
│ (index) │ id │ name                                        │
├─────────┼────┼─────────────────────────────────────────────┤
│ 0       │ 1  │ { firstName: 'Harshit', lastName: 'Raj' }   │
│ 1       │ 2  │ { firstName: 'Harshit', lastName: 'Sinha' } │
└─────────┴────┴─────────────────────────────────────────────┘

// '=' operator
const testObj = {
    id: 1,
    name: {
        firstName: "Harshit",
        lastName: "Raj"
    }
}
const newTestObj = testObj;
newTestObj.id = 2;
newTestObj.name.lastName = "Sinha";
console.table([testObj, newTestObj]);
┌─────────┬────┬─────────────────────────────────────────────┐
│ (index) │ id │ name                                        │
├─────────┼────┼─────────────────────────────────────────────┤
│ 0       │ 2  │ { firstName: 'Harshit', lastName: 'Sinha' } │
│ 1       │ 2  │ { firstName: 'Harshit', lastName: 'Sinha' } │
└─────────┴────┴─────────────────────────────────────────────┘

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Make an object immutable : Use of recursion

/* Const keyword is used to make any primitive data type immutable but it does not work completely on non-primitive data types like objects. When an object is made contstant, then we cannot reassign a new object to the variable in which it is stored but modification of its properties are possible - */
    const newObj = {id: 1, name: 'random'};
    newObj = {new_id: 23, new_name: 'random'}; // not allowed, JS will throw error -  Assignment to constant variable.
    newObj.id = 2; // allowed
/* In order to make an object immutable, use freeze() provided by the Object class. But it does not work with nested objects */
    const newObj = {id: 1, name: 'random'};
    Object.freeze(newObj);
    newObj.id = 2;  // No error will be thrown but on printing it old object will get printed.
    const user = {id: 1, name: {firstname: "harshit", lastname: "raj"}, address: {city: "dhanbad", state: "jharkhand"}};
    Object.freeze(user);
    user.id = 2; // not allowed
    user.name.lastname = 'sinha'; // allowed
/* The way to overcome this is to make a custom function that will deep freeze the object.*/
    function deepFreeze(user){
        Object.keys(user).forEach(key => {
            const keys_value = user[key];
            if(keys_value && typeof keys_value === 'object'){
                deepFreeze(keys_value);
            }
        });
        return Object.freeze(user);
    }
    
    const user = {id: 8, name: {firstname: "harshit", lastname: "raj"}, address: {city: "dhanbad", state: "jharkhand"}};
    deepFreeze(user);
    user.name.lastname = 'sinha';
    user.address.city = 'ranchi';
    console.log(user);

/* Logic: in order to freeze any object, we pass the variable to the freeze() in which the object is stored. Function will take the primary object and then loop through each of its keys and store the value in a variable and check whether it is of type 'object' or not. If it is of type object it will recurse that nested object to check if there is 3rd level of object. If not found, it will return the nested object by freezing it => the nested object will be freezed and returned to the recursive function and then the loop will iterate to the next key. In this way all the key's value will be freezed if it is an object or even if it contains any nested object. */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Loose equality check( == ) vs Strict equality check ( === ):

/*
Loose equality check - JavaScript performs type coersion (change operands on LHS and RHS to same datatype) and then checks whether values are same, if datatypes are same.
Strict equality check - The '===' operator checks for both value and type equality. Unlike ==, it does not perform type coercion. This means that the two values must be of the same type and have the same value to be considered equal.
*/

console.log(true == ' '); 
// output: false => since loose equality operator is used, JS will first change both to same type i.e. numbers, true will be converted to 1 and ' ' will be converted to 0 because even though white-space is considered as a truty value in conditional statements, while converting to number, the string is trimmed making it to an empty string without any space and then changing it to number will return 0.
// NOTE: Converting a non-empty string to number like 'harshit' will return NaN, if it contains non-numeric characters otherwise '1' will be converted to 1. Hence console.log(true == 'harshit'); will return false.

console.log(true === ' '); 
// output: false => since strict equality operator is used, JS will first check their types: boolean != string.

/***********/

// Trick question --
let a = 10;
let b = new Number(10);
console.log(a === b); // false, number != object

let a = 10;
let b = new Number(10);
console.log(a == b); // true -> When comparing a primitive value (a) with an object (b) using ==, JavaScript attempts to convert the object to a primitive value.

/***********/

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

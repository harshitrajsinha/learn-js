# Definition
* Generic definition - Set of instructions that take certain arguments as input, process them and return an output.
* Arguments are passed to the function by value => any change in the value of the parameters inside function scope will not affect the arguments passed. However, this is not true in case of objects and arrays since the parameters are going to reference the same objects and arrays. `See example-1`.
* Function declarations are hoisted i.e. function can be called before the function definition is written.
* **Methods** - Function used as property of an object.

# Types of function
1. Regular function
2. Arrow function
3. Anonymous function

# Function Expression
* Use-case: Functions in JavaScript are high-order functions => function can be passed as an argument to other functions (called callback fn) and function can also be returned from other functions. However, if we pass a function definition as an argument, it will make the code clumsy. So, a better approach would be to give a reference of that function to a variable and then (1) pass that variable as an argument. Another use case could be to (2) export the function to other files.
* Function expressions are not hoisted. Program will throw 'ReferenceError' - Cannot access [variable_name holding ref to the function] before initialization
* See Function Expression example in `functions-miscellaneous.js`.

# Callback function
* Functions passed as an argument to other function, generally they are anonymous function.

# Closure
* In a nested function, inner function forms a closure => the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function. Since the inner function forms a closure, outer function can be called and arguments can be specified for both the outer and inner function

# this
* 'this' keyword contains the current context - which contains bunch of methods (like Array.prototype or Object.prototype contains toString()) that we can call inside a function like setTimeout(), setInterval(), structuredClone(), fetch().
* Arrow functions do not have their own context. They take the context of "surrounding lexical scope" => if arrow function is defined in global scope, then {} will be value of 'this' whereas if it is defined inside another function declaration, then its context will be of that one.
```javascript
function showMessage() {
  const arrow = () => {
    console.log(this) // contains: setTimeout(), setInterval() ...
  }
}

const arrow = () => {
  console.log(this) // {}
}
```
NOTE: typeof this = object

# Arguments object
* functions have a built-in array-like object => data is stored as key-value pair like object where keys are indices like array and has length property.
* It can be used to know the length of total arguemts and if we are passing 10 arguments but only one params is accepting, arguments will show all 10.
* Arrow functions do not have their own arguments variable. They take the context of "surrounding lexical scope" 
```javascript
function showMessage(val) {
  console.log(arguments);  // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  console.log(arguments.length); // 5
}

showMessage(1, 2, 3, 4, 5);
```

# Topics covered
* Function definition
* Arguments as call by value and call by reference
* Types of function
* Function expression and its use-case
* IIFE (Immediately Invoked Function Expression) ?
* Callback functions
* Closure ?
* Scope chaining ?
* Currying ?
* Pure and impure function ?
### HC code
* Hoisting in case of expression
* rest operator and return type of rest operator
* arrow function and this
* console.log(this) in regular function vs arrow function
* IFFE (watch video)

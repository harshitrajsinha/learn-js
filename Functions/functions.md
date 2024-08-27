# Definition
* Generic definition - Set of instructions that take certain arguments as input, process them and return an output.
* Arguments are passed to the function by value => any change in the value of the parameters inside function scope will not affect the arguments passed. However, this is not true in case of objects and arrays since the parameters are going to reference the same objects and arrays. `See example-1`
* **Methods** - Function used as property of an object.

# Types of function
1. Regular function
2. Arrow function
3. Anonymous function

# Function Expression
* Use-case: Functions in JavaScript are high-order functions => function can be passed as an argument to other functions and function can also be returned from other functions. However, if we pass a function definition as an argument, it will make the code clumsy. So, a better approach would be to give a reference of that function to a variable and then (1) pass that variable as an argument. Another use case could be to (2) export the function to other files
* See Function Expression example in `functions-miscellaneous.js`

# Topics covered
* Function definition
* Arguments as call by value and call by reference
* Types of function
* Function expression and its use-case
* IIFE (Immediately Invoked Function Expression)

### HC code
* Hoisting in case of expression
* rest operator and return type of rest operator
* arrow function and this
* console.log(this) in regular function vs arrow function
* IFFE (watch video)

/* (1): Example */

let name = "Global";
function greet() {
    let name = "Local";
    console.log(name); // "Local"
}
greet();
console.log(name); // "Global"

// When the script runs, the global execution context is created. The variable 'name' is declared and assigned string value "Global". When greet() is called, a new function execution context is created. Inside greet(), a local 'name' variable is declared and assigned string value "Local". The console logs "Local" inside the function, then "Global" outside it, showing how different execution contexts maintain separate variable scopes.

/****************/






//Hoisting: Variable and function declarations are moved to the top of their scope, meaning they can be used before they are defined in the code.

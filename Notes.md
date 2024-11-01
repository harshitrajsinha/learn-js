To Master: Strings and its methods, Arrays and its methods, Objects, Browser events, scope - Node vs Window/browser, this keyword

--------------------------------------------------

* A lot of browsers do not understand new and fancy syntax of JS like - classes,  arrow functions. Solution => Introduce a tool in-between that can convert modern JS into classical JS or browser-based JS.

* These tools are - Babel, Webpack

* Modern JS code -> bundled -> transpiled -> compiled. This can be done using languages such as C, Go, Rust, Zig (used by Bun)

* Babel is a traspiler, which is a process of converting source code written in one programming language into another language that has a similar level of abstraction, which transpiles (converts) modern JavaScript into a version compatible with older browsers (e.g., converting ES6 arrow functions into ES5 functions).
* Webpack is a module bundler (like parcel, rollup) that converts/bundles multiple JS files into a single large file that browser then uses to load the JS application. It resolves the problem of multiple files and their dependency on eachother as well as the loading of modules in different files in a specific order.

* Bun use JavaScript Core (used by Safari web browser) as a runtime engine instead of popular V8 or spider monkey 

--------------------------------------------------

DAY 1: undefined, use-strict, data-types: symbol, null [typeof null], object, type conversion

TOPIC: Variables and Data-types -

* Use const => constant variables (accountId) and let => non-constant variables (city, state)
* When a variable is declared but not defined then the value stored is 'undefined'

IMPORTANT: Whenever any data is coming from FrontEnd/User form always be aware of 'type of' the data. In JS, if we are expecting a number then always use Number() to convert any type to 'number' data-type.
let phoneNumber = Number(phone);
IMPORTANT: An issue that one may encounter while using Number() is that the value that is getting converted may not return a number. For example - "33" will be converted to 33 but "33abc" will be converted to NaN. Therefore, always check for NaN also followed by type conversion. [typeof NaN = number]

* Converting to number
Number("22") => 22 (number)
Number("22abc") => NaN (number)
Number(null) => 0 (number)
Number(undefined) => undefined

* Converting to boolean
Boolean(1/0) => true/false
Boolean("") => false //empty string
Boolean("harshit") => true

* We can use variables in string using Template Literals. For eg: console.log(`Hello, ${name}`)

# Math
* Formula for random number between range
const min = 10
const max = 20
const randomNum = Math.floor(Math.random()*(max-min+1))+min

# Arrays:
* Slice vs Splice (slice does the change by creating a copy of array, splice does change by manipulating the original array)

# Objects:
* How different keys are accessed in objects: name, "name", [name]

# Function:
* We can call a function before its declaration and definition. This will run without any error due to hoisting [DONT USE THIS. JUST FOR REFERENCE].
Refer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting

# Closure:
A closure is a function that has access to variables from its outer (enclosing) lexical scope, even after that outer function has returned.

function outer() {
  const name = "Bob";

  function inner() {
    console.log(`Hello, ${name}!`);
  }

  return inner;
}

const greeting = outer();
greeting(); // logs "Hello, Bob!"

In this example, outer defines a variable name and a function inner . inner is defined within outer, so it has access to name in outer's lexical environment. When outer is called, a variable named 'name' will be defined, but the function 'inner' will be skipped since it is a function and it has not been called. Finally 'return inner' statement will run and inner will return. 'greeting' variable will store 'inner' and then inner() will be called (greeting = inner). This call will directly execute inner() and not start from declaring 'name' variable again. A closure is created that retains access to 'name' during the end of outer() execution. This means that even though outer has finished running and 'name' is technically out of scope, inner can still access it and log a greeting with it.


# Promises: 

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

** Without Promises -
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

** Using Promises -
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

# Falsy values in JS:
false
0
-0
0n (BigInt zero)
'' (empty string)
null
undefined
NaN

Truthy values in JS: 
'0' (string containing a single zero)
'false' (string containing the word "false")
[] (empty array)
{} (empty object)
function() {} (empty function)

How to check if value will return truthy value or falsy:
if('0'){
  console.log("true") //will execute
}else{
  console.log("false")
}

// checking if string is empty or not
const name = "something"
if(name){
  // will be executed
}else{}

// checking if array is empty or not

//just for example to show empty array returns truthy value
const array1 = []
if(array1){
//will be executed
}
//this is how array check should be performed
const array2 = []
if(array2.length === 0){
// will be executed
}

// this is how object check should be performd
const obj2 = {}
if(Object.keys(obj2).length === 0){          //Object.keys(obj2) returns array of keys ['key1', 'key2'], in this case it will be empty
//will be executed
}

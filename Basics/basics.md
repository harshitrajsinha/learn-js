# Defining JavaScript:
* Synchronous : Execution takes place in a sequence, line-by-line.
* Single-threaded : Executes one command at a time.
* Dynamically-typed language: Datatype of variable is decided during runtime.
* JavaScript also has mechanisms (like callbacks, promises, async/await, and event loops) to handle asynchronous operations, allowing the language to perform non-blocking tasks (e.g., making network requests) while still being single-threaded.

# Execution context:
* Container/environment in which JavaScript code is evaluated and executed
* Types - 1) Global Execution Context - When the JS script runs, the global execution context is created; the 'this' keyword refers to the global object (e.g., window in browsers, global in Node.js). Only one global execution context exists in a JavaScript program. 2) Function Execution Context - Whenever a function is invoked, a new execution context is created for that function. Each function call has its own execution context, independent of other functions.
* Components/parts - 1) Memory component/variable environment - Lists out all the variables and functions in key-value pair. 2) Code component/ Thread of execution - Place where execution of code takes place.
* Phase - 1) Creation phase - Memory is allocated to variables and functions. 2) Execution phase - Code execution and assignment of values to the variables take place.
* See example (1)
  
![Execution Context](https://raw.githubusercontent.com/harshitrajsinha/learn-js/main/Assets/Screenshot%202024-08-24%20084642.png)

# Memory Allocation:
* Variable - JS allocates memory to a variable equal to the type of the value it is initialized with. Initially, all the variables contains 'undefined' and once the code execution phase starts then the memory equal to the value starts getting allocated.
> **undefined** is like a placeholder that JS uses to denote variable that has not been assigned a value yet. typeof(undefined) = undefined. undefined != not defined; undefined != empty/null
   
  let num = 10;          // 8 bytes for the number 10
  let str = "hello";     // 10 bytes for the 5 characters (each 2 bytes)
  let flag = true;       // 1 byte for the boolean value true
  let obj = { a: 1 };    // Reference to an object, memory depends on properties
* If the variable is declared but not initialized then 'undefined' is stored as value and some fixed amount of memory is reserved for that variable. This fixed amount of memory varies depending upon the JS engine.
* Function - Function is stored as an object in memory which includes the space for its code, its internal properties (like name, length), and a reference to its prototype.

# Control Flow:
## Switch -
* break keyword is important because once a key/case is matched then all the following gets executed => if the case 3 is matched then the code in case 4, case 5...will execute as well, except **default** case. Hence, using break is important in each switch case.

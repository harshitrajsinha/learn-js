# Defining JavaScript:
* Synchronous : Execution takes place in a specific order.
* Single-threaded : Executes one command at a time.

# Execution context:
* Container/environment in which JavaScript code is evaluated and executed
* Types - 1) Global Execution Context - In the global execution context, the this keyword refers to the global object (e.g., window in browsers, global in Node.js). Only one global execution context exists in a JavaScript program. 2) Function Execution Context - Whenever a function is invoked, a new execution context is created for that function. Each function call has its own execution context, independent of other functions.
* Components/parts - 1) Memory component/variable environment - Lists out all the variables in key-value pair. 2) Code component/ Thread of execution - Place where execution of code takes place.
* See Example (1).

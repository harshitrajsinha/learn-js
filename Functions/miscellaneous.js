// Function Expression

const print_name = function(){
    console.log("harshit");
}
console.log(typeof print_name());  // output: harshit -> undefined (undefined because if typeof operator is called on a 'function call' then the type is determined by the value returned by the function
console.log(typeof print_name);  // output: function object in node env/ function definition (entire function code) in browser env
//Note: typeof print_name() can be written as typeof(print_name()); => first print_name function will be called and then typeof operator will be executed
const print_name = function(){
    console.log("harshit");
    return 2;
}
console.log(typeof print_name()); // output: harshit -> Number
console.log(typeof print_name);  // output: function object

// Function object

//In JavaScript, functions are first-class objects, meaning they can have properties just like any other object
function abc() {
  console.log(abc.xyz);
}
abc();         // console -> undefined
abc.xyz = 400; // 400 will be assigned to 'xyz' property of function abc
abc.xyz = 200; // 200 will be assigned to 'xyz' property of function abc
abc();         // console -> 200

// What can we do to make variable visible outside of if?
// The correct approach would be to use a Function Expression.
let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // ok now

// Typeof Function

const print_name = function(){
    console.log("harshit");
}
console.log(typeof print_name());  // output: harshit -> undefined (undefined because when we typeof operator is called on a function call then the type is determined by the value returned by the function
console.log(typeof print_name);  // output: function
//Note: typeof print_name <=> typeof(print_name()); => first print_name function will be called and then typeof operator will be executed

const print_name = function(){
    console.log("harshit");
    return 2;
}
console.log(typeof print_name()); // output: harshit -> Number
console.log(typeof print_name);  // output: function


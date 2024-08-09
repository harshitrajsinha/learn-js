// Convert a number to binary
const to_binary = num.toString(2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// setTimeout - used to execute a process after certain time interval
const print_my_name = function(){   // this type of syntax for writing function is used when we want to give reference of the function to elsewhere
  console.log("harshit");
}
setTimeout(print_my_name, 2000);
// Note: Above we are giving reference of the function
// setTimeout(print_my_name(), 2000);  :- this will execute the function immediately

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

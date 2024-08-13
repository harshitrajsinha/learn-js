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

// Make an object immutable : Use of recursion

/* Const keyword is used to make any primitive data type immutable but it does not work completely on non-primitive data types like objects. When an object is made contstant, then we cannot reassign a new object to the variable in which it is stored but modification of its properties are possible - */
    const newObj = {id: 1, name: 'random'};
    newObj = {new_id: 23, new_name: 'random'}; // not allowed, JS will throw error -  Assignment to constant variable.
    newObj.id = 2; // allowed
/* In order to make an object immutable, is to use freeze() provided by the Object class. But it does not work with nested objects */
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

// Comma operator

/* Comma operator is used to evaluate each of the operands, if it is an expression, seperated by comma, from left to right and then return the value of last operand.*/
const myNum = (2,3);
console.log(myNum); // 3

/* Use-case: */
// 1) To evaluate expression in single line (not professional) */
    let x = 2;
    x = (x++, x); // since there is not expression to be evaluated so x++ will increment the value of x by 1. The value of x in second operand will become 3.
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
const num = (2, console.log("here"));
console.log(num);
//here
//undefined

/*************/



// --------------------------------------------------------------------------------------------------------------------------------------------------------------

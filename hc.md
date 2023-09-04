# DAY x: Objects
* Singleton objects / declaring object using constructor

DATE: 2023.09.04

TOPIC:  Object de-structre

#  How to de-structure objects (used in ReactJS) -
eg: 
console.log(course["course_name]);

# Syntax 1-
const {course_name} = course
console.log(course_name)

# Syntax 2-
const {course_name: cname} = course         // Syntax 2
console.log(cname)

TOPIC:  Functions

function some_name(...parameters...){

}
some_name   <-- reference of function (running this will not result in anything)
some_name(...arguments...) <-- calling of function (running this will run the code inside function, if exists)

# In JS, if no arguments are passed then the parameters of the function becomes undefined
eg: 

function some_name(name){
    console.log(`Your name is ${name}`)
}
some_name()                                     // output: Your name is undefined

Therefore, it is must to do check before processing the parameters

# Dynamic parameter

function dynamic_param(...any_no_param)         // ... => rest operator

IMPORTANT: 

function rest_operator(...num){
    return num                                  // Output: [1,2,3,4,5] array of parameters
}

rest_operator(1,2,3,4,5)

function rest_operator(val1, val2, ...num){
    return num                                  // Output: [3,4,5] array of parameters after storing val1 and val2
}

rest_operator(1,2,3,4,5)

IMPORTANT:
# Scope: 
Difference in node environment scope vs window scope (inspect -> console)

console.log(this) ->IN NODE -> {}                       //In node, global scope is empty object           
console.log(this) -> inspect->console -> WINDOW         //In browsers, global scope is window object 
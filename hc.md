# DAY x: Objects
* Singleton objects / declaring object using constructor

# DAY y:

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
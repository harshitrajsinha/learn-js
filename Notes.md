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


# async and await:

'async' keyword is used to make a function asynchronous. This means:

async function functionCall(){
    console.log("first print")
    const result = someOtherCall() //assuming it will take some time to return result
    console.log(result)
    console.log("final print")
}
functionCall();

Output:
first print
final print
{result}

'await' make the flow synchronous to the line it is called. It makes further statement 'wait' unless it has completed its task.

async function functionCall(){
    console.log("first print")
    const result = await someOtherCall() //assuming it will take some time to return result
    console.log(result)
    console.log("mid print")
    const result2 = someOtherCall2()
    console.log(result2)
    console.log("final print")
}
functionCall();

Output:
first print
{result}
mid print
final print
result2

OR

async function functionCall(){
    console.log("first print")
    const result = await someOtherCall() //assuming it will take some time to return result
    console.log("mid print")
    console.log(result)                     // once result is stored, first print 'mid print' then print result
    const result2 = someOtherCall2()
    console.log(result2)
    console.log("final print")
}
functionCall();

Output:
first print
mid print
{result}
final print
result2
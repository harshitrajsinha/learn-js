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
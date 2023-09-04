// Creating Object

// Defining symbol
const sym = Symbol("symKey");

const an_object = {
    name: "Harshit",
    "myname": 23,
    [sym]:  "a symbol"
}

console.log(typeof an_object['myname']);
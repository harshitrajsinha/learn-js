# Definition:
1. Non-primitive data type, used to store data in key-value pair.
2. Create using object literal: (`{}`), the `new Object()` constructor, and `Object.create()`.
   
```javascript
// creating an object with create(null) does not include any prototype like toString(), valueOf(), hasOwn().
// This should only be used when the object is not going to be interactive.
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype
const nullProtoObjLiteral = {__proto__: null} // create a literal object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

// Prototypes can be added manually.
nullProtoObj.toString = Object.prototype.toString;
Object.setPrototypeOf(nullProtoObj, Object.prototype)
```

# Should know methods:

## Instance Methods:
* Methods defined in the 'Object' class - `valueOf()`, `toString()`, `hasOwnProperty()`

## Static Methods:
`defineProperty()`, `freeze()`, `hasOwn()`, `keys()`, `getOwnPropertyNames()`, `values()`, `entries()`, `groubBy()`, `is()`

# How to check if property exists in an object:
* `hasOwn()` - this overcomes the limitations of 'hasOwnProperty()' but does not include inherited properties like 'toString()' and 'valueOf()'. Use `hasOwnProperty()` for browsers that dont support 'hasOwn()' \
* `in` operator - this checks for direct and inherited properties as well.

# How to delete property from an object:
* use `delete` operator

# How to copy/clone an object:
1. `=` operator -> reference original object (changing anything to new obj will affect original obj)
2. `assign()`, `...` -> top-level properties duplicated but nested objects are referenced (changing top-level prop to new obj will not affect original obj but nested objects affect original obj).
3. `JSON.parse(JSON.stringify())`, `_.cloneDeep()`, `structuredClone()` -> everything is duplicated (changing anything to new obj will not affect original obj)

# How to merge multiple objects:
* use `assign()`, `...` 

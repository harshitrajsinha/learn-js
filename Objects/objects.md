# Definition:
1. Non-primitive data type, use to store data in key-value pair.
2. Create using object literal: (`{}`), the `new Object()` constructor, and `Object.create()`
```javascript
// creating an object with create(null) does not include any prototype like toString(), valueOf(), hasOwn().
// This should only be used when the object is not going interacted.
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

// Prototypes can be added manually.
nullProtoObj.toString = Object.prototype.toString;
```

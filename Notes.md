## What is [object Object] when dealing with JSON/objects?
- cases: ({} + '1'), localStorage.setItem({name: 'harshit'})
- In first case, JS tries to convert object into primitive data type (string in this case) using toString(), toString() when called on object results in [object Object].
- In second case, setItem() expects a string value to be set for key. If JSON.stringify() is not used to convert JS object into JSON string, then JS does it implicitly using toString(), which results in the following.

## Why this happens :
```javascript
  console.log(sayHello()); // 'harshit'
  console.log(sayH); // ReferenceError: Cannot access 'sayH' before initialization
  
  function sayHello() {
    return 'harshit';
  }
  let sayH = 'harshitraj';
```
* This happens because -
* In lexical environment, as the script starts execution, all the variables and functions are already registered in 'environment record' even before program reaches their declaration statement. A variable is in <uninitialized> state untill program reaches line no - 14, as a result we get referece error on accessing it before declaring it. However, a function is initialized completely even before program reaches line no - 11.
[Reference](https://javascript.info/closure#lexical-environment)

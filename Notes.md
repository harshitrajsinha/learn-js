## What is [object Object] when dealing with JSON/objects?
- cases: ({} + '1'), localStorage.setItem({name: 'harshit'})
- In first case, JS tries to convert object into primitive data type (string in this case) using toString(), toString() when called on object results in [object Object].
- In second case, setItem() expects a string value to be set for key. If JSON.stringify() is not used to convert JS object into JSON string, then JS does it implicitly using toString(), which results in the following.

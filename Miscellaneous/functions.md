# Difference between calling a function and referencing a function
```javascript
const returnNum = () => {
  return 23;
};

console.log(returnNum()); // Function call: output = 23
console.log(returnNum); // Function reference: output = [Function: returnNum]
```
* Use function reference in case of attribute/events, where the function will be consumed and then called internally such as - onclick, onchange, Promise 

# async/await definition
![async/await definition](https://github.com/harshitrajsinha/learn-js/blob/3d18cf6f481976cf6f332afcffa0ac1c403ac653/Assets/Screenshot%202025-01-08%20171125.png)

* await works only on those function/statements that returns promise like fetch(). It does not work on synchronous operations, setTimeout().
* To await any synchronous operation, we need to wrap a promise around it -
```javascript
function customFetch() {
  console.log('here');
}
async function main() {
  console.log('1');
  await new Promise((resolve) => {
    customFetch();
    resolve();
  });
  console.log('3');
}
main();
```

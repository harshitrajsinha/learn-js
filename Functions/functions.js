// Example: 1
function updateArg(param){
  if(typeof param === 'object'){
    mycar[Object.keys(param)[0]] = 'change';
  }else{
    param = 23; 
  }
}
let argNum = 4;
updateArg(argNum);
console.log(argNum); // 4
let mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
updateArg(mycar);
console.log(mycar.make); // "change"
// Above example shows non-primitve data types are passed by reference, but primitves are passed by value.






function mul(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called mul with ${x}`);
  return x * 5;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      console.log(cache);
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    console.log(cache);
    return result;
  };
}

addNum = cachingDecorator(add);
mulNum = cachingDecorator(mul);

console.log(addNum(1));
console.log(addNum(2));
console.log(addNum(1));
console.log(mulNum(1));
console.log(mulNum(2));
console.log(mulNum(1));
console.log(addNum(1));






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

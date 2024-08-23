// Unary operator (+) performs type coersion of the operand to type - Number

console.log(+"5"); // 5
console.log(+"5abc"); // NaN
console.log(+true); // 1

// Unary operator (-) performs type coersion of the operand to type - Number and then negates it (adds a 'negative' sign)

console.log(-"5"); // -5
console.log(-"5abc"); // NaN
console.log(-true); // -1
console.log(-false); // -0

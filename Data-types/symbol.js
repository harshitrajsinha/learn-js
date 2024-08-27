/* Exmaple - 1 */
let symType, symType2;
symType = symType2 = Symbol('desc');
console.log(symType === symType2); // true
const symType = Symbol('desc');
const symType2 = Symbol('desc');
console.log(symType === symType2); // false
const sym1 = Symbol.for('desc');
const sym2 = Symbol.for('desc');
console.log(sym1 === sym2); // true

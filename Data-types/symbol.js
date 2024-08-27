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

/* Example - 2 */
let symbolType = Symbol('fn');
function changeValue(param){
    console.log(param.description); // 'fn'
    if(typeof param === 'symbol'){
        param = Symbol('fnn');
    }
}
console.log(symbolType, typeof symbolType); // Symbol(fn) symbol
changeValue(symbolType);
console.log(symbolType, typeof symbolType); // Symbol(fn) symbol
// Explaination: Copy of reference will be passed => symbolType, param will poiint to same symbol in heap memory but due to uniqueness and immutability, when param will be assigned to a new symbol then instead of modifying the previous symbol, a new symbol will be created and param will now point to the new symbol and the previous symbol will remain as it is.

# Definition
* The 'description' of a Symbol is purely for debugging purposes and does not affect the uniqueness of the Symbol.
* Symbols are immutable => When a symbol is created in memory, it becomes unique. A 'let' variable when assigned Symbol('1') from Symbol('2'), the variable is pointed from one symbol to another, but the first symbol and its uniqueness remains as it is.
* "value" of symbol is its unique identity, but not something that can be accessed.
* `See exmaple -1`


# Points to ponder
* symbol use-case: to create unique property keys in an object ?
* How symbols are immutable
* how to use Symbol.for("key") and what is global symbol registry ?
* what is the use of symbol in assigning to a variable in global scope ?
* symType1 !== or != symType2; if both are assigned with Symbol('desc'); 
* memory allocation of symbols ?

/* There is no built-in method to check whether an object is non-array and non-null object, like Array.isArray(). Create a method/function to do the same. */
const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const arrayType = [1,2,3,4,5];
const objectType = {
    'one': 1,
    'two': "two",
    'three': true
}
console.log(isObject(arrayType)); //false
console.log(isObject(objectType)); //true

// Make an object immutable : Use of recursion

/* Const keyword is used to make any primitive data type immutable but it does not work completely on non-primitive data types like objects. When an object is made contstant, then we cannot reassign a new object to the variable in which it is stored but modification of its properties are possible - */
    const newObj = {id: 1, name: 'random'};
    newObj = {new_id: 23, new_name: 'random'}; // not allowed, JS will throw error TypeError -  Assignment to constant variable.
    newObj.id = 2; // allowed
/* In order to make an object immutable, use freeze() provided by the Object class. But it does not work with nested objects */
    const newObj = {id: 1, name: 'random'};
    Object.freeze(newObj);
    newObj.id = 2;  // No error will be thrown but on printing it old object will get printed.
    const user = {id: 1, name: {firstname: "harshit", lastname: "raj"}, address: {city: "dhanbad", state: "jharkhand"}};
    Object.freeze(user);
    user.id = 2; // not allowed
    user.name.lastname = 'sinha'; // allowed
/* The way to overcome this is to make a custom function that will deep freeze the object.*/
    function deepFreeze(user){
        Object.keys(user).forEach(key => {
            const keys_value = user[key];
            if(keys_value && typeof keys_value === 'object'){
                deepFreeze(keys_value);
            }
        });
        return Object.freeze(user);
    }
    
    const user = {id: 8, name: {firstname: "harshit", lastname: "raj"}, address: {city: "dhanbad", state: "jharkhand"}};
    deepFreeze(user);
    user.name.lastname = 'sinha';
    user.address.city = 'ranchi';
    console.log(user); // {"id": 8,"name": {"firstname": "harshit","lastname": "raj"},"address": {"city": "dhanbad","state": "jharkhand"}}

/* Logic: in order to freeze any object, we pass the variable to the freeze() in which the object is stored. Function will take the primary object and then loop through each of its keys and store the value in a variable and check whether it is of type 'object' or not. If it is of type object it will recurse that nested object to check if there is 3rd level of object. If not found, it will return the nested object by freezing it => the nested object will be freezed and returned to the recursive function and then the loop will iterate to the next key. In this way all the key's value will be freezed if it is an object or even if it contains any nested object. */


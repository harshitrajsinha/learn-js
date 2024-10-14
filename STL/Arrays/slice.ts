// Array.slice() - Returns a array which is shallow-copied of original array; can be used as a non-mutative alternative to pop(): slice(-1)

class Solution{
    slice(arr: (string | number | boolean | object)[], start?: number, end?: number): (string | number | boolean | object)[]{
        
        // Return if empty array or non-array
        if(!Array.isArray(arr) || arr.length === 0){
            console.log("Array is required");
            return [];
        }
        // Return if start index is not defined
        if(typeof start === 'undefined'){
            return arr;
        }
        // Return if start index is greater than or equal to array length
        if(start >= arr.length){ // slice(originalArr)
            return [];
        }

        if(typeof end === 'undefined'){
            let newArr: (string | number | boolean | object)[] = [];
            // considering negative index
            if(start < 0){
                start = arr.length - Math.abs(start);
            }
            for(let index=start; index < arr.length; index++){
                newArr.push(arr[index]);
            }
            return newArr;

        }else if(start > end){
            return [];
        }else{
            let newArr: (string | number | boolean | object)[] = [];
            // considering negative index
            if(start < 0){
                start = arr.length - Math.abs(start);
            }
            if(end < 0){
                end = arr.length - Math.abs(end);
            }

            for(let index=start; index < end; index++){
                newArr.push(arr[index]);
            }

            return newArr;
        }

    }
}

// Defining original array
const originalArr = [10, 'harshit', true, 8, 'raj']; // -1, -3 => 
const obj = new Solution();
const result: (string | number | boolean | object)[] =  obj.slice(originalArr, -3, 4);
console.log(result);
/* 

Test cases:

[] => [],
start >= arr.length => []
start > end => []
slice(0, 2);
slice(2, 4);
slice(3);
slice(-1);
slice(-3, -1); 
slice(-3, 4);

*/

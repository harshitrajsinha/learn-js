class Solution{
    push(orgArr: any[], ...args: any[]): number{
        
        // if no elements to be inserted
        if(orgArr.length && !args.length){
            return orgArr.length;
        }
        
        // Fetch length of array to calculate further indices as key
        const arrLength = orgArr.length;

        args.forEach((elem, index) => {
            orgArr[arrLength + index] = elem;
        });

        // Return length of array
        return orgArr.length;

    }
}

const obj = new Solution();
const arr: any[] = [];
const result: number = obj.push(arr);
console.log(arr);
console.log(result);


/* TEST CASE:

[] -> [], ([...]) -> [...]

*/

//
function functionCall(someValue){
    if(!someValue){
        console.log("error");
        return;
    }
    someValue['myname'] = "raj sinha";

}

someValue = {
    "myname": "harshit"
};
console.log(someValue["myname"]);
functionCall();
console.log(someValue["myname"]);

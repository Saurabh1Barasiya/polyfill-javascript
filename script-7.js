// polyfill of apply().

function myFunc(address){
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Address is ${address}`);
}

const obj = {
    name:"saurabh",
    age:25,
}

// myFunc.apply(obj,["harrai"]);

Function.prototype.myApply = function(context={},remaningArgs=[]){
    if(typeof this !== "function"){
        throw new Error("Calling object is not an function");
    }

    if (!Array.isArray(remaningArgs)) {
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...remaningArgs);
}

myFunc.myApply(obj,["harrai"]);
// polyfill of call().

// call() kisi function par lagta h.

function myFunc(address){
    console.log(`Name is ${this.name}`);
    console.log(`Name is ${this.age}`);
    console.log(`Address is ${address}`);
}

const obj = {
    name:"saurabh",
    age:25,
}

// myFunc.call(obj,"harrai");

Function.prototype.myCall = function(context={},...args){
    if(typeof this !== "function"){
        throw new Error("calling object is not function");
    }

    context.fn = this;
    context.fn(...args);
}

myFunc.myCall(obj,"harrai");
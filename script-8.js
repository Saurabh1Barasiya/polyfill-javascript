// polyfill for bind.

function myFunc(address,country){
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Address is ${address}`);
    console.log(`Country is ${country}`);
}

const obj = {
    name:"saurabh",
    age:25,
}

// const bindedFunc = myFunc.bind(obj,"harrai");
// bindedFunc();

Function.prototype.myBind = function(context={},...args){
    // this means calling object --> myFunc.

    if(typeof this !== "function"){
        throw new Error("Calling object must be function");
    }

    context.fn = this;

    return function(...newArgs){
        return context.fn(...args,...newArgs);
    }
}

const retFunc = myFunc.bind(obj,"Chhindwara");
retFunc("india");
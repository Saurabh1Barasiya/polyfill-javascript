// infinite function currying ...

function sum(a){
    return function(b){
        if(b === undefined){
            return a;
        }else{
            return sum(a+b);
        }
    }
}


const total = sum(1)(2)(3)(4)(5)(5)();
console.log(total);
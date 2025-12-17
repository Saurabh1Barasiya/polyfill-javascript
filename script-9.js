// function currying ...

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return function (e){
                    return a+b+c+d+e;
                }
            }
        }
    }
}


const total = sum(1)(2)(3)(4)(5);
console.log(total);
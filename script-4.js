// ployfill for reduce.

const arr = [10,20,30,40,50];

// const total = arr.reduce((acc,curr)=>acc+curr,0);
// console.log(total);  // 150

Array.prototype.myReduce = function(callBack,initialValue){
    let acc = initialValue;
    let currentIndex = 0;
    if(acc === undefined){
        acc = this[0];
        currentIndex = 1;
    }

    for(let index=currentIndex;index<this.length;index++){
        acc = callBack(acc,this[index])
    }

    return acc;
}

const res = arr.myReduce((acc,curr)=>{
    return acc+curr;
},0);

console.log(res);
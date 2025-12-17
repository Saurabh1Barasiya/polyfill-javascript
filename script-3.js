// polyfill for filter function.

Array.prototype.myFilter = function(callBack){
    // this always point to calling object.

    let temp = [];  // because filter return a new array.

    for(let index=0;index<this.length;index++){
        let flag = callBack(this[index],index,this);
        if(flag){
            temp.push(this[index]);
        }
    }

    return temp;
}

const arr = [10,20,30,40,50,60,70,80,90,100];
const filterArray = arr.myFilter((element,index,array)=>{
    return element >= 50;
});

console.log(filterArray);  // [ 50, 60, 70, 80, 90, 100 ]
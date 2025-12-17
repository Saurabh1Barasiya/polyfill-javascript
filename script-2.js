// polyfill for map.
let arr = [1,2,3,4,5];

// const newArr = arr.map((ele,index,array)=>{
//     return ele*10;
// });

// console.log(newArr); // [ 10, 20, 30, 40, 50 ]

Array.prototype.myMap = function(callBack){
    // this always represent the calling object.

    let temp = [];  // because map return a new array.

    for(let index=0;index<this.length;index++){
        let ans = callBack(this[index],index,this);
        temp.push(ans);
    }

    return temp;

}

const newArr = arr.myMap((element,index,array)=>{
    return element*10;
});

console.log(newArr); // [ 10, 20, 30, 40, 50 ]
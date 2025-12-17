// polyfill for forEach() method.

let arr = [10,20,30,40,50,60];

// arr.forEach((element,index,array)=>{
//     console.log(element,index,array)
// })


Array.prototype.myForEach = function(callBack){
    // console.log(this)  // [ 10, 20, 30, 40, 50, 60 ]
    // always this point to calling object that is arr.

    for(let i=0;i<this.length;i++){
        const element = this[i];
        callBack(element,i,this);
    }
}

arr.myForEach((element,index,array)=>{
    console.log(element,index,array);
})
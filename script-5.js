// polyfill for flat.

Array.prototype.myFlat = function(depth){
    if(depth === undefined){
        depth = 1;  // because flat() function me default depth 1 hoti h
    }

    let result = [];
    for(let element of this){
        if(Array.isArray(element) && depth > 0){
            result.push(...element.myFlat(depth-1))
        }else{
            result.push(element);
        }
    }

    return result;
}

arr = [10,20,[30,40],[50,60,[70,80,90,[100,200]]]];
// console.log(arr);
// const flateArray = arr.flat();
// console.log(flateArray);

const flateData = arr.myFlat(2);
console.log(flateData);
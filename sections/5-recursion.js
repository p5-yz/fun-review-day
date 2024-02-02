
function deepEntries(array, arr){
    let obj = [], obj2 = []
    for (let i in array){
       obj.push([array[i], i])
        // if (typeof array === "object"){
        //     return deepEntries(array)
        // }    
    }
    if (arr === undefined)
    {
        return obj
    }
    return deepEntries(null, array)
   
 }




const deepEntries = () => {};

const deeplyEquals = () => {};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };

function makeNameTags(guest){
    const newObj = []
    for(let i=0;i<guest.length;i++){
        newObj.push(guest[i])
        newObj[i].nameTag = `${guest[i].title} ${guest[i].forename} 
        ${guest[i].surname}, ${guest[i].company}`
    }  
    return newObj
}


function createPoll(arr) {
    let obj = {}
    const tempArr = [...arr]
    for (let i=0; i<tempArr.length;i++){
        obj[tempArr] =    arr.filter(function(item){
        if (item ===tempArr[0] ) 
            return item
        }).length
   } 
   return obj
}

module.exports = { makeNameTags, createPoll };

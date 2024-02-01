function generateMultiples(num) {
    let arr = [], count = 0, increment = 0
    return function (num2){
        if (num === 0){
            return []
        }
        for (i=1;i<num2;i++){
            count=num*i
            arr.push(count)
            count = 0
        }
        return arr
    }
}

function secureFunc(password, func) {
    return function (pass){
        if (password === pass){
            return func()
        } else {
            return "Sorry your password is incorrect"

        }
    }
}

module.exports = { generateMultiples, secureFunc };

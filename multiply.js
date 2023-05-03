function multiply(number){
    return number
        .split(',')
        .map(x => parseInt(x))
        .reduce((a,b) => a*b)
}

exports.multiply = multiply;
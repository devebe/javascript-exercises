const removeFromArray = function(input,number) {
    const arrReturn = new Array();
    for (let i = 0; i < input.length; i++) {
        
        if (number != input[i]) {
            arrReturn.push(input[i]);
        }
    }
    return arrReturn;
}

// Do not edit below this line
module.exports = removeFromArray;

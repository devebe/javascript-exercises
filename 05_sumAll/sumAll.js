const sumAll = function(num1,num2) {
    let startValue;
    let endValue;
    let errorMessage = 'ERROR';
    if (typeof num1 != "number" || typeof num2 != "number" || (num1 < 0) || (num2 < 0)) {
        return errorMessage;
    }
    else if (num1 > num2) {
        startValue = num2 - 1;
        endValue = num1;
    }
    else {
        startValue = num1 - 1;
        endValue = num2;
    }    
    let result = 0.5 * ((endValue * (endValue + 1)) - (startValue * (startValue + 1)));
    return result;
};

// Do not edit below this line
module.exports = sumAll;

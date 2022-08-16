const sumAll = function(num1,num2) {
    let startValue;
    let endValue;
    if (start > end) {
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

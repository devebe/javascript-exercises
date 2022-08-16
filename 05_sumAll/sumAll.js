const sumAll = function(start,end) {
    let startValue;
    let endValue;
    if (start > end) {
        startValue = end - 1;
        endValue = start;
    }
    else {
        startValue = start - 1;
        endValue = end;
    }    
    let result = 0.5 * ((endValue * (endValue + 1)) - (startValue * (startValue + 1)));
    return result;
};

// Do not edit below this line
module.exports = sumAll;

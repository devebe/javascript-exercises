const sumAll = function(start,end) {
    let startValue = start - 1;
    let endValue = end;
    let result = 0.5 * ((endValue * (endValue + 1)) - (startValue * (startValue + 1)));
    return result;
};

// Do not edit below this line
module.exports = sumAll;

const leapYears = function(inputYear) {
    // start with the highest moduli
    let isLeapYear;
    if (inputYear % 400 == 0){
        isLeapYear = true;
    }
    else if (inputYear % 100 != 0 && inputYear % 4 == 0){
        isLeapYear = true;
    }
    else {
        isLeapYear = false;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;

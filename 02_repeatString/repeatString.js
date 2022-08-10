let string;
let num = 0;
const repeatString = function(string, num) {
    parseInt(num);
    let result = ''
    if (num < 0) {
        result = 'ERROR';
    }
    else if (num === 0) {
        result = '';
    }
    else {
        for (let i = 0; i < num; i++) {
            result = result + string;
        }
    }
    return result;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;

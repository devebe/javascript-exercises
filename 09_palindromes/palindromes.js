const palindromes = function (string) {
    let newString = string.replace(/[^A-z]/g, '').toLowerCase().split('');
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] !== newString[(newString.length - 1) - i] ){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

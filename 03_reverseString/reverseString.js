const reverseString = function(string) {
    const forwardArray = string.split("");
    let reverseText = '';
    for (let i = 0; i < forwardArray.length; i++) {
        reverseText += forwardArray[forwardArray.length - i - 1];
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;

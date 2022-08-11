const removeFromArray = function(input,numbersToRemove) {
    const arrReturn = new Array();
    for (let i = 0; i < numbersToRemove.length; i++) {

        let num = numbersToRemove[i];

        for (let j = 0; j < input.length; j++) {

            if (num != input[j]) {
                arrReturn.push(input[i]);
            }
        }
    }
    return arrReturn;
}
// Do not edit below this line
module.exports = removeFromArray;

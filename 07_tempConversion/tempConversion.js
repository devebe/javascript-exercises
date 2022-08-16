const ftoc = function(conversionValue) {
  let celciusValue = (conversionValue - 32) * (5/9);
  return parseFloat(celciusValue.toFixed(1));
};

const ctof = function(conversionValue) {
  let fahrenheitValue = conversionValue * (9/5) + 32;
  return parseFloat(fahrenheitValue.toFixed(1));  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

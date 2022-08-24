const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
	let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  else {
    let result = number;
    while (number > 1) {
      result *= (number - 1);
      number--;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

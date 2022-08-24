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

const power = function() {
	
};

const factorial = function() {
	
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

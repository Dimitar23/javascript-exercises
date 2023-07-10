const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(array) {
	return array.reduce((multiplied, item) => multiplied *= item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if(a === 0) return 1;
  result = a;
  for(let i = a-1; i>0; i--){
    result *= i;
  }
  return result;
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

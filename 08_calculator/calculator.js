const add = function(one,two) {
	return one + two;
};

const subtract = function(one,two) {
	return one - two;
};

const sum = function(arr) {
	const sum = arr.reduce((total,val) => total += val,0);
  return sum
};

const multiply = function(arr) {
  const total = arr.reduce((tot,val)=>tot=tot*val,1)
  return total;
};

const power = function(one,two) {
	return one**two;
};

const factorial = function(num) {
	let sum = 1;
  for(let i=num;i>0;i--){
    sum *= i;
  }
  return sum;
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

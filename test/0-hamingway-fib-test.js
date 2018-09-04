const assert = require('tressa');

const cases = require('./test-cases.js');


const fibonacci = require("../0-hamingway-fib.js");

assert.title('hamingway-fib');

for (let cond of cases) {
	let expected = cond.expected;
	let input = cond.input;
	let actual = fibonacci(input);
	assert(compare_arrays(actual,expected), cond.message);
};

function compare_arrays(_a, _b) {
	let result = true; 
	if (_a.length !== _b.length) {
	  return !result;
	}
	for (let i = 0; i < _a.length; i++) {
	  if (_a[i] !== _b[i]) {
		return !result;
	  };
	};
	return result;
  };

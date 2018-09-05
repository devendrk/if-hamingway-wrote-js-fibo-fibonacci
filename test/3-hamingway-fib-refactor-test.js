const assert = require('tressa');

const cases = require('./test-cases.js');

const hamingway_fib_refactor = require("../3-hamingway-fib-refactor.js");

assert.title('hamingway_fib_refactor');

for (let cond of cases) { // cond = array of casses and cases are properties.
	// assert(padStart_refactor(...cond.input) === cond.expected, cond.message);
	assert(compare_arrays(hamingway_fib_refactor(...cond.input), cond.expected), cond.message)
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

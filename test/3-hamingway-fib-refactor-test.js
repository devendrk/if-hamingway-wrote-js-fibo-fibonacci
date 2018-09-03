const assert = require('tressa');

const cases = require('./test-cases.js');

const hamingway_fib_refactor = require("../3-hamingway-fib-refactor.js");

assert.title('hamingway_fib');

for (let cond of cases) {
	assert(padStart_refactor(...cond.input) === cond.expected, cond.message);
};

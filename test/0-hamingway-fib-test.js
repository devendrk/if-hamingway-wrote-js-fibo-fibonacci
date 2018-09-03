const assert = require('tressa');

const cases = require('./test-cases.js');


const fibonacci = require("../0-hamingway-fib.js");

assert.title('hamingway-fib');

for (let cond of cases) {
	assert(fibonacci(...cond.input) === cond.expected, cond.message);
};
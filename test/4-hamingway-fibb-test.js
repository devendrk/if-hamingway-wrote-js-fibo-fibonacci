const assert = require('tressa');

const cases = require('./test-cases.js');

const hamingway_fib_tracible = require("../4-hamingway-fib-tracible.js");

assert.title('hamingway-fib');


for (let cond of cases) {
	assert( hamingway_fib_tracible(...cond.input).result === cond.expected, cond.message);
};

let a = [1, 2, 3];
let b = [1, 2, 3];
let c = [2, 3, 4];

assert(compare_arrays(a, b), 'a, b -> true');
// assert(compare_arrays(a, c), 'a, c -> false');


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

function assert(assertion, message) {
  if (!assertion) {
    console.log(message);
  }
};
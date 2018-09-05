
let args = {
    size: 5   
    };
      
   
    
const expected = [0, 1, 1, 2, 3];
    
const actual;
 { // = fiboncacci(size);
    let ret_val;
    fib_frame: {
        
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];
        if (args.size < 2) {
            ret_val = "the request was made but it was not good"
            break fib_frame;
        };
        
        let condition;
        {// = count++ < size
            const step_2 = count < args.size;
            count = count + 1; // step_1
            condition = step_2;
        };
        
    
        while (condition) {
            next = first + second;
            first = second;
            second = next;
            result.push(next);
            
            {// = count++ < size
                const step_1 = count < args.size;
                count = count + 1;
                condition = step_1;
            };
            
        };
        ret_val = result;
        break fib_frame;                
    };
    actual = ret_val;
}

const util = require('util')
console.log(compare_arrays(expected,actual), "fail: " + util.inspect(args) + " -> " + actual);



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
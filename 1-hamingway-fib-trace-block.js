console.log(0)

let args = {
    size: 5   
    };
    console.log(1)  
   
    
    const expected = [0,1,2,3] ;
    fibonacci: {
        //fiboncacci(size);
        let ret_val;
        fib_frame: {
            
            console.log(2);
            let first = 0;
            let second = 1;
            let next;
            let count = 2;
            let result = [first, second];
            console.log(3);
            if (args.size < 2) {
                result = "the request was made but it was not good"
            };
            console.log(4)
            let condition;
            {// = count++ < size
                const step_1 = count < args.size;
                count = count + 1;
                condition = step_1;
            };
            console.log(5)
        
            while (condition) {
                next = first + second;
                first = second;
                second = next;
                result.push(next);
                console.log(6)
                {// = count++ < size
                    const step_1 = count < args.size;
                    count = count + 1;
                    condition = step_1;
                };
                
            };
            console.log('before return')
                ret_val = result;
                console.log('after return')
            break fib_frame;                
        };
        fibonacci = ret_val;
    }

    


const util = require('util')
console.log(compare_arrays(expected,fibonacci), "fail: " + util.inspect(args) + " -> " + fibonacci);



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
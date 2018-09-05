 
closure = {
    isargs_too_short: function (size) {
        let result;
        
        if (size < 2)
            return true
        else
            return false;
    },
    size_check: function (size, count_num) {
        let result;
        const step_2 = count_num < size;
        count_num = count_num + 1; // step_1
        result = step_2;

        return result;
        
    }
    
};

let args = {
    size: 1
    };
    
const expected = [0, 1, 1];
let fib_array;
{
    
    let ret_val;
    fib_frame: {
        
        
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];
        // if (args.size < 2) {
            
        //     result = "the request was made but it was not good"; 
        //     break fib_frame;
            
        // };
        if (closure.isargs_too_short(args.size)) {
            ret_val = "the request was made but it was not good";   
            break fib_frame;
        };
 
        
        while (closure.size_check(args.size, count)) {
            next = first + second;
            first = second;
            second = next;
            result.push(next);
            count++;
        
        };
        
        ret_val = result;
        break fib_frame;
    };
    fib_array = ret_val;
}

const util = require('util')
console.assert(compare_arrays(expected, fib_array), util.inspect({args, expected, actual: fib_array}));

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
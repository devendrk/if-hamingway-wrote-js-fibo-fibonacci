
function fibonacci(size, ) {
    let result;
    if (result) {
        result = {}
        result.args = {
            size
        }
    };

        
    let first = 0;
    let second = 1;
    let next;
    let count = 2;
    let result = [first, second];

    if (size < 2) {
        result = "the request was made but it was not good";
        return result; 
        
    };

    while (size_check(size, count)) {
        next = first + second;
        first = second;
        second = next;
        result.push(next);
        count++;
 
    };
    
    return  result;
};

module.exports = fibonacci;


function fib_args(size) {
    let result;

    if (size < 2)
        result = "the request was made but it was not good"

    return result;       
};
let fib_args_test_cases = [{ input: [5], expected: [0, 1, 1, 2, 3], message: "5 -> [0,1,1,2,3]" },{ input: [NaN], expected: [0,1], message: "5 -> [0,1]" }
];

function size_check(size, count_num) {
    let result;
    const step_2 = count_num < size;
    count_num = count_num + 1; // step_1
    result = step_2;
    return result;        
};

let size_check_test = [
    { input: [-6], expected: 'the request was made but it was not good', message: "-6-> 'the request was made but it was not good'" },
    { input: ['abc'], expected: [0, 1], message: "'abc' -> [0,1]" },
];




    

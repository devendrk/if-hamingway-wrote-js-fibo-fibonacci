// All my life I’ve looked at JavaScript as though I were seeing it for the first time.

// var hemingway = function () {
//     function fibonacci(size) {		
//         var first = 0, second = 1, next, count = 2, result = [first, second];
//         if (size < 2)
//             return "the request was made but it was not good"

//         while (count++ < size) {
//             next = first + second;
//             first = second;
//             second = next;
//             result.push(next);
//         }
//         return result;
		
//     }
// }
{
let args = {
    size: undefined    
    };
    
   
    let ret_val;

    fibonacci: {
        
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];

        if (size < 2) {
            ret_val = "the request was made but it was not good"
        };
        let condition;
        {//count++ < size
            const step_1 = count++;
            const step_2 = step_1 < args.size; 
            condition = step_2; 
        };
//             next = first + second;
//             first = second;
//             second = next;
//             result.push(next);
        
        while (condition) {
            next = first + second;
            first = second;
            second = next;
            result.push(next);
        };
        
    }
    
}



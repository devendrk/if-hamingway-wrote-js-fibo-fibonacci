module.exports = [
    { input: [5], expected: [0,1,1,2,3], message: "5 -> [0,1,1,2,3]" },
    { input: [NaN], expected: [0,1], message: "5 -> [0,1]" },
    { input: [-6], expected: 'the request was made but it was not good', message: "-6-> 'the request was made but it was not good'" },
    { input: ['abc'], expected: [0, 1], message: "'abc' -> [0,1]" },
    { input: ['5'], expected: [0, 1, 1, 2, 3], message: "'5' -> [0, 1, 1, 2, 3]" },
    { input: [6.5], expected: [0, 1, 1, 2, 3, 5, 8], message: "6.5 -> [ 0, 1, 1, 2, 3, 5, 8 ]" },
    { input: [6.2], expected: [0, 1, 1, 2, 3, 5, 8], message: "6.2-> [ 0, 1, 1, 2, 3, 5, 8 ]" },
    { input: [12], expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ], message: "12 -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]" },
    
]
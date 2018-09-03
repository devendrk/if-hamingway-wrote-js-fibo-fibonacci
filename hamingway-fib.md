
### If hemingway-wrote-js-fibonacci
>The Fibonacci sequence is the series of numbers whereby each new number is the sum of the previous two. By convention, the first two numbers of the series are 0 and 1. These are the first 15 Fibonacci numbers: 

>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 Behavior is defined by inputs/output pairs.


___

### The objective of this step is to thoroughly understand the behavior of your Lodash function.Behavior is defined by inputs/output pairs.

To achive the objective we will follow the following steps.
1. Make a new repo, name it after your chosen function. Re-title the README.md in your template.
2. study, understand and write the behaviour of the Fibonacci function.
3. Complete the Input Analysis section of the README, tables work well for this.
4. Create a whole lot of test cases in ./test/test-cases.js.
5. Be sure to test your test cases using the Repl.it in the Lodash docs.
6. The template indicates how you should structure your test cases.
7. opy paste the source for your function into ./0-___.js. Be sure to line up the require statements.
8. Rename the 'require's in 0's testing file & run your test cases on the original Lodash function. If any fail you are wrong, not Lodash. Fix your test cases.
6. Done! You have now 100% understood the behavior of your function. Time to move on and study the implementation
___

1. code behaviour :
> The objective of this step is to thoroughly understand the behavior of fibonacci function.

Arguments
```js
[number = ] (): argument length

```
returns
 
(array): returns the array starting from 0  and adding the consecutive numbers if its number and greater than 0 . Other wise it will give a error message.


Example
```js
fibonacci(3);
// [ 0, 1, 1 ]

fibonacci('abc');
// [ 0,1 ]
fibonacci(4.5);

fibonacci(true);
//'the request was made but it was not good'

```
___

2. Input Analalysis  

|input: as_argument  
|---|  
|not + integer|
|neg int|
|str|
|string number|
|decimal|
|very big number|

3. Create a whole lot of test cases in ./test/test-cases.js.Be sure to test your test cases using the Repl.it in the Lodash docs.

___

5. Copy paste the source for your function into ./0-fibonacc.js. Be sure to line up the require statements.
Rename the 'require's in 0's testing file & run your test cases on the original Lodash function. If any fail you are wrong, not Lodash. Fix your test cases.
Done! You have now 100% understood the behavior of your function. Time to move on and study the implementation.
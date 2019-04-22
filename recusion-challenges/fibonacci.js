// function fibonacci(num) {
//     let count = 1;
//     let first = 1,
//         second = 1;
//     let result = 0;

//     function fib(num1, num2) {
//         count++;
//         if (count < num) {
//             result = num1 + num2;
//             num1 = num2;
//             num2 = result;
//             fib(num1, num2);
//         } else {
//             return;
//         }
//     }

//     fib(first, second);

//     return result;
// }

function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
function fibonacci(num) {
    let count = 1;
    let first = 1, second = 1;
    let result = 0;

    function fib(num1, num2) {
        count++;
        if (count < num) {
            result = num1 + num2;
            num1 = num2;
            num2 = result;
            fib(num1, num2);
        } else {
            return;
        }
    }

    fib(first, second);

    return result;
}

console.log(fibonacci(4));
function collectOdds(arr) {
    let result = [];

    function innerFunction(element) {
        if (element && element % 2 !== 0) {
            result.push(element);
        }

        if (arr.length === 0) {
            return;
        } else {
            innerFunction(arr.shift(1));
        }
    }

    innerFunction(arr.shift(1));

    return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function capitalizeWords(arr) {
    let result = [];

    function innerFunc(reduceArray) {
        if (reduceArray.length === 0) {
            return;
        }

        result.push(reduceArray[0].toUpperCase());
        innerFunc(reduceArray.slice(1));
    }

    innerFunc(arr);

    return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
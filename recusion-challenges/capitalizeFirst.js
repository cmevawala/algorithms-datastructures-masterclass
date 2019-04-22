function capitalizeFirst(arr) {
    let result = [];

    function innerFunc(reduceArray) {
        if (reduceArray.length === 0) {
            return;
        }

        var char = reduceArray[0].charAt(0);
        result.push(reduceArray[0].replace(char, char.toUpperCase()));
        innerFunc(reduceArray.slice(1));
    }

    innerFunc(arr);

    return result;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
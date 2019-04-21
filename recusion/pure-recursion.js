function collectOdds(arr) {
    let result = [];

    if (arr.length === 0) {
        return result;
    }

    let element = arr.slice(0);
    if (element % 2 !== 0) {
        result.push(element);
    }

    result = result.concat(collectOdds(arr));

    return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
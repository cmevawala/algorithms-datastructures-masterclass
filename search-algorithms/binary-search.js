function binarySearch(array, val) {

    let left = 0;
    let right = array.length - 1;
    let middle = 0;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (array[middle] === val) {
            return middle;
        } else if (array[middle] < val) {
            left = middle + 1;
        } else if (array[middle] > val) {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([11, 22, 33, 44, 55], 44));
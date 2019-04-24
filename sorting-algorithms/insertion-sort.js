// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] > arr[i]) {
//             for (let j = i - 1; j >= 0; j--) {
//                 if (arr[j + 1] < arr[j]) {
//                     [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//                 }
//             }
//         }
//     }

//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currVal;
    }

    return arr;
}

console.log(insertionSort([19, 44, 38, 5, 47, 15]));
console.log(insertionSort([2, 1, 9, 76, 4]));
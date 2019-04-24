// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr, arr[i], arr[j]);
//             if (arr[i] > arr[j]) {
//                 let k = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = k;
//             }
//         }
//     }

//     return arr;
// }

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([43, 32, 99, 76, 56]));
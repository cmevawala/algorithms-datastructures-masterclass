// function reverse(str) {
//     let count = str.length - 1;
//     let result = '';

//     function innerFunc(char) {
//         if (count === -1) {
//             return;
//         }

//         result = result + char;
//         count--;
//         innerFunc(str.substr(count, 1))
//     }

//     innerFunc(str.substr(count, 1));

//     return result;
// }


function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log('awesome');
console.log(reverse('awesome'));
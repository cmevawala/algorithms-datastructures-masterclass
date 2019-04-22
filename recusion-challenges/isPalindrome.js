// function isPalindrome(str) {
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

//     return str === result;
// }

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}

console.log(isPalindrome('foobar'));
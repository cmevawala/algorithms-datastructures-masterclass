function subString(longStr, shortStr) {
    let i = 0;
    let j = 0;
    let count = 0;

    while (i < longStr.length) {

        j = 0;
        while (j < shortStr.length) {
            if (longStr[i] === shortStr[j]) {
                i++;
                j++;
            } else {
                break;
            }
        }

        if (j === shortStr.length) {
            count++;
        }

        i++;
    }

    return count;
}

console.log(subString('lorie loled', 'lo'));
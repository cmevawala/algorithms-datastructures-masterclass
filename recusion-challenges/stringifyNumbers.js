function stringifyNumbers(obj) {

    function convertStringToNumbers(object) {
        for (var key in object) {
            if (typeof object[key] === 'number') {
                object[key] = object[key].toString();
            } else if (typeof object[key] === 'object') {
                convertStringToNumbers(object[key]);
            }
        }
    }

    convertStringToNumbers(obj);

    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));
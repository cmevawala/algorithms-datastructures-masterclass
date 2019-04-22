function nestedEvenSum(obj) {
    let totalEvens = 0;

    function calculateSum(object) {
        for (var key in object) {
            if (typeof object[key] === 'number') {
                if (object[key] % 2 === 0) {
                    totalEvens += object[key];
                }
            } else if (typeof object[key] === 'object') {
                calculateSum(object[key]);
            }
        }
    }

    calculateSum(obj);

    return totalEvens;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
};
console.log(nestedEvenSum(obj2));
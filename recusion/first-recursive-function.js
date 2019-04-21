function countDown(count) {
    if (count == 1) {
        console.log(count);
        return;
    }
    console.log(count);
    count--;
    countDown(count);
}

console.log(countDown(5));
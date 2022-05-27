let array = [1, 4, 5, 7, 9];

function sequencialSearch(array, item) {
    let response = false;
    for(let i=0; i < array.length; i++) {
        if(array[i] == item)
            response = i;
    }

    return response;
}

console.time();
console.log(sequencialSearch(array, 2));
console.log(sequencialSearch(array, 4));
console.log(sequencialSearch(array, 9));
console.timeEnd();
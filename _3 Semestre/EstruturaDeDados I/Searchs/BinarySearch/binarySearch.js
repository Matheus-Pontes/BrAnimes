let array = [1, 4, 5, 8, 9];

function binarySearch(array, item, start, end) {
    if(start <= end) {
        middle = Math.round((start + end) / 2);
        if(array[middle] == item)
            return middle;
        if(item < array[middle])
            return binarySearch(array, item, start, middle - 1);
        else 
            return binarySearch(array, item, middle + 1, end);
    }
       
    else 
        return false;
}
console.time();
console.log(binarySearch(array, 4, 0, array.length - 1));
console.log(binarySearch(array, 2, 0, array.length - 1));
console.log(binarySearch(array, 9, 0, array.length - 1));
console.timeEnd();

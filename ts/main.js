var array1 = [12, 33, 9, 5, 1, 43, 25];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var x = 0; x < arr.length - 1; x++) {
            if (arr[x] < arr[x + 1]) {
                var aux = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = aux;
            }
            ;
        }
        ;
    }
    return arr;
}
;
console.log(bubbleSort(array1));

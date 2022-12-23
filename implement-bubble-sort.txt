function bubbleSort(array) {
    let arr = [5, 3, 4, 2];
    let isSorted = false
    while (isSorted === false) {
        for (let i = 0; i < array.length; i++) {
            let tem;
            if (array[i] > array[i + 1]) {
                tem = array[i + 1];
                array[i + 1] = array[i];
                array[i] = tem;
            }
        }

        for (let i = 0; i < array.length; i++) {
            if (array[i] - array[i + 1] > 0) {
                isSorted = false;
                break;
            }else{
                isSorted=true
            }
        }
    }
    console.log(array)
    return array;
}
bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
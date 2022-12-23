function bubbleSort(array) {
    let arr = [5, 3, 4, 2];
    let isSorted = false
    while (isSorted === false) {
        for (let i = 0; i < arr.length; i++) {
            let tem;
            if (arr[i] > arr[i + 1]) {
                tem = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tem;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] - arr[i + 1] > 0) {
                isSorted = false;
                break;
            }else{
                isSorted=true
            }
        }
    }
    console.log(arr)
    return arr;
}
bubbleSort();
function rotateLeft(d, arr) {
    // Write your code here
    for (let index = 0; index < d; index++) {
        arr=rotateLeftOnce(arr)
    }
   return arr;

}
function rotateLeftOnce(arr){
    return [...arr.slice(1),arr[0]]
}
console.log(rotateLeft(4,[1,2,3,4,5]))
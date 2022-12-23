function updateInventory(arr1, arr2) {
    arr2.forEach((itemOfArray) => {
        let items = itemOfArray[1];
        let isThereItem = arr1.find((item) => item[1] === items)
        if (isThereItem) {
            const indices = arr1.findIndex((elem) => elem[1] === items);
            arr1[indices][0] = itemOfArray[0] + arr1[indices][0]
        } else {
            arr1.push(itemOfArray)
        }
    });

    let newArr=arr1.sort((a, b) =>a[1].localeCompare(b[1]))
    console.log(newArr)
    return newArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);
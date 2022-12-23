function diffArray(arr1, arr2) {
  const newArr = [...arr1.filter(num=>!arr2.includes(num)),...arr2.filter(num=>!arr1.includes(num))];
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
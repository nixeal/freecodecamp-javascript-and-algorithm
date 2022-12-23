function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let eachArray of arr){
    let result =eachArray.includes(elem);
    console.log(result);
    if(result===true){
      continue;
    }else{
      newArr =[...newArr,[...eachArray]]
    }
  }

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
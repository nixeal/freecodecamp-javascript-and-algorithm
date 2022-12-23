function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let eachArray of arr){
    let result =eachArray.includes(elem);
    console.log(result)
    if(result === true){
      continue;
    }else{
      newArr=[...newArr,[...eachArray]]
    }
    
  }

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
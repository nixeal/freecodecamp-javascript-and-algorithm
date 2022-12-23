function chunkArrayInGroups(arr, size) {
  let updatedArray = [];
  let initalIndex = 0;
  let finialIndex = arr.length;
  let noOfDivision = initalIndex+finialIndex/size;
  while(noOfDivision>0){
    let newArray = arr.slice(initalIndex,initalIndex+size);
      updatedArray =[...updatedArray,[...newArray]];
      console.log(updatedArray)
    console.log(newArray);
    initalIndex=initalIndex+size;
    noOfDivision-- 
  }
  return updatedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
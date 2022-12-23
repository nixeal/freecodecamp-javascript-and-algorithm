function steamrollArray(arr) {
  //Base Case
  if(arr.every(elem => !Array.isArray(elem))) return arr;
  let finalArr = [];
  for(let elem of arr){
    if(Array.isArray(elem)) {finalArr.push(...steamrollArray(elem))}else{
      finalArr.push(elem);
    }
  }
  console.log(finalArr)
  return finalArr;
}


steamrollArray([1, [2], [3, [[4]]]]);
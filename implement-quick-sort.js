function quickSort(array) {
  // Only change code below this line
  if(array.length<=0)return [];
  let pivotNumber = array[0];
  let less=[];
  let more=[];
  let equal=[];
  for(let number of array){
    if(number>pivotNumber){
      more.push(number);
    }else if(number<pivotNumber){
      less.push(number);
    }else{
      equal.push(number)
    }
  }
  array=[...quickSort(less),...equal,...quickSort(more)];
console.log(array)
  return array;
  // Only change code above this line
}
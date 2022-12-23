function quickSort(array) {
    // Only change code below this line
    if(array.length===0)return [];
    let pivotNumber = array[0];
    let less = array.filter(num=>num<pivotNumber);
    let more=array.filter(num=>num>pivotNumber);
    console.log(less,more)
    let rarray=[...quickSort(less),pivotNumber,...quickSort(more)];
    console.log(rarray)
  
    return rarray;
    // Only change code above this line
  }
  quickSort([1,2,3,5,4,8,1000,232,45884,111,90,70,222,])
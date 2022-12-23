function getIndexToIns(arr, num) {
  let trial = arr.sort((a,b) => a - b).findIndex(e => e >= num);
  if(trial !== -1) return trial;
  return arr.length
}

getIndexToIns([2, 5, 10], 15);
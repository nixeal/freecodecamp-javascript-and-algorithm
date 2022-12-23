function sumAll(arr) {
  const ranges=[];
  arr.sort((a,b)=>a-b);
  for(let i =arr[0];i<=arr[1];i++){
    ranges.push(i);
  }
  console.log(ranges)
  const sums= ranges.reduce((a,x)=>a+x)
  return sums;
}

sumAll([1, 4]);
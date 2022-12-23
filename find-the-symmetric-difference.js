function sym(...args) {
let newArray=[];
newArray=args.reduce((a,x,index)=>{
if(index===0){
  return x;
}else{
  return [...a.filter(num=>!x.includes(num)),...x.filter(num=>!a.includes(num))]
}
},[])
let na=[...new Set(newArray)]
  console.log(na)


  return na

/**
 * 
 * args.reduce((latestSymmetricDifference, currentArray, index)=> {
 * if(index ===0) return currentArray;
 * 
 * return symmetricDiff(latestSymmetricDifference, currentArray)
 * }, null)
 */

}

sym([1, 2, 3], [5, 2, 1, 4]);
function uniteUnique(arr,...args) {
  console.log(arr,args);
  let newarr=[...new Set(arr)];
  console.log(newarr)
  let num =args.length;
  for(let array of args){
    const argsArray = array.filter((e)=>!newarr.includes(e))
    newarr=[...newarr,...argsArray];
    console.log(newarr)
  }

  return newarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
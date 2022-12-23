function addTogether(a, b) {
  let nArgs = arguments.length;
  if(nArgs === 1){
    if(typeof(a) !== "number") return undefined;
    return ((x) => addTogether(a,x));
  }else if(nArgs === 2){
    if(typeof(a) !== "number") return undefined;
    if(typeof(b) !== "number") return undefined;
    return a + b;
  }
  return undefined;
}

console.log(addTogether(5)(7));
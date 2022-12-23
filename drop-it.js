function dropElements(arr, func) {
let foundTrue = false;
return arr.filter((e)=>{
   let funcEval = func(e);
   if(funcEval)return foundTrue=true;
return foundTrue;
})
}

dropElements([1, 2, 3], function(n) {return n < 3; });
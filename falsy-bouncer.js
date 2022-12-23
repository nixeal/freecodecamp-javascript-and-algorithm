function bouncer(arr) {
 let newArray = [];
 arr.forEach((element)=>{
   if(Boolean(element)=== false){
     return;
   }else{
     newArray.push(element)
   }
 })
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
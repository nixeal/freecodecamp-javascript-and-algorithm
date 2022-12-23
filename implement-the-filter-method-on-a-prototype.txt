Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0; i<this.length;i++){
    let  elem = this[i];
    if(callback(elem,i,this)){
      newArray.push(elem)
    }
  }

  // Only change code above this line
  return newArray;
};
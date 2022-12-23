function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push=function(elem){
    collection.push(elem)
  };
  this.pop=function(){
   let elem= collection.pop();
   return elem;
  };
  this.peek=function(){
    let len = collection.length;
    return collection[len-1]
  };
  this.clear=function(){
    collection=[];
  };
  this.isEmpty=function(){
    let len = collection.length;
    return len===0?true:false;
  }

  // Only change code above this line
}
let newmethod= new Stack();
newmethod.push("this")
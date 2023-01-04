function Queue(){
     collections=[["Work",1],["Work2",2]];
     this.print=function (params) {
        console.log(collections)
     }
     this.enqueue=function(elem){
        const [ customer, priority]=elem;
        const highestPiorityInCollection= collections.reduce((acc,inital)=>inital[1]>acc?inital[1]:acc,0);
        if(priority>highestPiorityInCollection){
           return collections.unshift(elem);
        }
        collections.push(elem);
     }
     this.dequeue=function(){
       return collections.shift();
     }
     this.front=function(){
        return collections[0];
     }
     this.rear=function(){
        return collections[collections.length-1]
     }
     this.isEmpty=function(){
        return collections.length!==-1?false:true;
     }
     this.size=function(){
        return collections.length
     }
}

const newQueue= new Queue();
newQueue.enqueue(["bark",0])
newQueue.enqueue(["howl",0])
newQueue.enqueue(["medidate",7])
console.log(newQueue.isEmpty());
console.log(newQueue.size())
console.log(newQueue.front());
console.log(newQueue.rear())
newQueue.print()
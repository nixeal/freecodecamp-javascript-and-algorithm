const Person = function(firstAndLast) {
  let [first,last] = firstAndLast.split(' ');
  

  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.setFullName = function(args) {
      const [fname,lname] = args.split(' ');
   first=fname;
    last=lname;
    return fname + " " +lname;
  };
  this.getFullName = () => first+" "+last;
  this.getFirstName = () => first;
  this.getLastName = () => last;
  this.setFirstName=(fname)=>{
   return first=fname
  };
  this.setLastName=(lname)=>{
   return last=lname
  }

  return first,last;
};

const bob = new Person('Bob Ross');
console.log(bob.getLastName())

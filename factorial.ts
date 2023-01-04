const  Factorial=( number)=>{
if(number==0)return 1;
return number*Factorial(number-1);
};

const value = Factorial(4);
console.log(value)
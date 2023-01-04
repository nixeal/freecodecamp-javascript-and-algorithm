const factorial=(num)=>{
    //base case
    if(num==0)return 1;
    //derived case
    return num*factorial(num-1);

}
const result=factorial(3);
console.log(result)
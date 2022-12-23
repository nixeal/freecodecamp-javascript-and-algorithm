function sumAll(arr) {
const sortedNumber = arr.sort((a,b)=>a-b);
console.log(sortedNumber);
let minNumber=sortedNumber[0];
let maxNumber= sortedNumber[1];
let sum =0;
for(let i = minNumber;i<=maxNumber;i++){
sum= sum+minNumber;
minNumber++
}
return sum
}

sumAll([1,3]);
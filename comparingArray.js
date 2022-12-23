const arr = ["helle","hello"];
const comparingFuntion =(arr)=>{
const firstElement = arr[0].split('');
const secondElement = arr[1].split('');
const result =firstElement.every(e=> secondElement.includes(e))? true: false;
console.log(result)
};
comparingFuntion(arr);
function sumFibs(num) {
  let fibNumbers = [0,1];
  for(let i = 1; i<=num;i++){
    if(i===1){
      fibNumbers.push(1)
    }else{
    let number =fibNumbers[i-1]+fibNumbers[i];
    fibNumbers.push(number)
    }
  }
  const fibRange = fibNumbers.filter(e=> e<=num);
  const reducedSum = fibRange.reduce((a,x)=>{
    if(x%2===0){
      return a
    }else{
      return a=a+x
    }
  },0);
  console.log(reducedSum)
  return num=reducedSum;
}

sumFibs(10);
function sumPrimes(num) {
  let primes =[];
  const isPrime=(n)=>{
    for(let i =2; i<=Math.ceil(n/2);i++){
      if(n%i ===0){
        return false
      }
    }
      return true;
  };
  for(let i=2; i<=num;i++){
    if(isPrime(i)){
      primes.push(i)
    }
  }
  const sum =primes.reduce((a,x)=>a+x);
  console.log(sum,primes)
  return sum;
}

sumPrimes(10);
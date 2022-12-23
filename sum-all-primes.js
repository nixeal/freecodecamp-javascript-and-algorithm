function sumPrimes(num) {
  let sum = 0;
  for(let i=2;i<=num;i++){
    if(isPrime(i)) sum +=i;
  }
  console.log(sum)
  return sum
}

const isPrime = (n) => {
  console.log(n)
  for(let i = 2; i<=Math.ceil(n/2);i++){
    if(n % i === 0) return false;
  }
  return true;
}

sumPrimes(10);
const sumOfPrimes = (num) => {
    let primes = [];
    const isPrime = (n) => {
        for (let i = 2; i <= Math.ceil(n / 2); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        const res = isPrime(i)
        if (res) {
            primes.push(i)
        };

    }
    const sum = primes.reduce((a,x)=>a+x);
    return sum;


};


const summation =sumOfPrimes(1000);
console.log(summation)
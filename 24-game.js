function solve24 (numStr) {
    console.log(numStr);
    const splitted = numStr.split('');
    console.log(splitted);
    const checkingfactorof24=(num)=>{
        let factors=[];
            for(let i=1; i<=num;i++){
                if(num%i===0){
                    factors.push(i)
                }
            }
            return factors;
    }
    const factors=checkingfactorof24(24);
    console.log(factors)
  
    return true;
  }

  solve24('4342');
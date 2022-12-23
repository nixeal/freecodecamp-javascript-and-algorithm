function pairwise(arr, arg) {
    let pairing= [];
    for(let i=0;i<=arr.length ;i++){
      let requiredNumber = arg-arr[i];
      const isNumber= arr.includes(requiredNumber);
    if(isNumber){
      let newa=[arr[i],requiredNumber];
      pairing.push(newa)
    }
    };
    const maped= pairing.map(e=>{
     return e.map((elem)=>{
       let ll=arr.findIndex(e=>e===elem);
       return ll
     })
    });
  const data =  maped.map(e=>{
     let s=e.reduce((a,x)=>{
       return a=a+x
     },0);
     return s
    });
    const unique=[...new Set(data)];
    console.log(unique);
    const sum = unique.reduce((a,x)=>a+x)
    
  
  
    return sum;
  }
  
  pairwise([1,4,2,3,0,5], 7);
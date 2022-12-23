function convertToRoman(num) {
  const romanIndicator = [
    ["M", 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX',9],
    ["V", 5],
    ['IV', 4],
    ['I', 1]
  ];
  
  const resolving=(num,romanIndicator)=>{
  let res=[];
  let tr=num;
  while(tr>0){
   let filtered=romanIndicator.find((arr)=>{
    return arr[1]<=tr
  });
  let[indicator,number]=filtered;
    let r=Math.floor(tr/number);
    let s=tr%number;
    console.log(r,s)
    for(let i=0;i<r;i++){
      res.push(indicator)
    }
    tr=s
  }
  const romanStr=res.join('');
  return romanStr;
   
  }  
 const romanString= resolving(num,romanIndicator);
console.log(romanString)
 
  

  return romanString;
}

convertToRoman(9);
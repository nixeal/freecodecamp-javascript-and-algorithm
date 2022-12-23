function spinalCase(str) {
    const newStr =str.toLowerCase();
    const strArr =newStr.split('_'||' ');
    console.log(strArr);
  
    
    const len = strArr.length;
    for(let i =0;i<len-1;i++){
      strArr[i]=strArr[i]+"-";
    }
  let finalStr=strArr.join('')
  
    console.log(finalStr)
    return finalStr;
  }
  
  spinalCase('This Is Spinal Tap');
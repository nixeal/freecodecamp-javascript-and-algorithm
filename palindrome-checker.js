function palindrome(str) {
  let ispalindrome;
  const a=str.toLowerCase().split('')
  const regex=/[A-Za-z0-9]/
  const f = a.filter((e)=>{
   return regex.test(e)
    });
    const s= f.join('')
    const rf=f.reverse();
    const rs=rf.join('');
    s===rs? ispalindrome=true:ispalindrome=false
 return ispalindrome;   
}

palindrome("_eye");
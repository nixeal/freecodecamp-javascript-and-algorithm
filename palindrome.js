function palindrome(str) {
    let isPalindorme=false;
    const arrayofStr= str.split('');
    const fa= arrayofStr.filter((e)=> typeof(e)==='string')
    const rfa=fa.reverse();
    const fas=rfa.join('');
    console.log(fas,str)
    if(fas===str){
      isPalindorme= true
    }else{
      isPalindorme= false
    }
    return isPalindorme;
  }
  
  
  
  palindrome("not a palindrome");
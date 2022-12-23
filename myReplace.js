function myReplace(str, before, after) {
    const words= str.split(' ');
    const matchedWordIndex =words.findIndex(word=> word.toLowerCase()===before.toLowerCase());
    console.log(matchedWordIndex)
    const testFunction =(acquired, orginal)=>{
        if((/^[A-Z]/).test(acquired)){
           orginal= orginal.charAt(0).toUpperCase()+orginal.slice(1)
            return orginal;
        }else{
            orginal = orginal.charAt(0).toLowerCase()+orginal.slice(1);
            return orginal
        }
    }
   const modifiedString = testFunction(words[matchedWordIndex],after);
   words[matchedWordIndex]=modifiedString;
   str =words.join(' ');

   console.log(str);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
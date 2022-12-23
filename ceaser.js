function rot13(str) {
    const abc = new Array(26).fill("").map((e,i)=>String.fromCharCode(i+65));
    let letter = 'S';
  
  
    const findItsRelative=(letter,abc)=>{
        const ciphered= abc.filter((alphabet,index)=>{
            const i = abc.findIndex((e)=>e===letter).map(e=>e+13);
            i>26?i-26:i;
            return alphabet[i];
        });
        console.log(ciphered);
    }
    findItsRelative(letter,abc)
  
    return str;
  }
  
  rot13("SERR PBQR PNZC");
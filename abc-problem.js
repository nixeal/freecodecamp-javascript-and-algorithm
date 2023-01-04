function canMakeWord(word) {
    let arrofblocks=[];
    let wordsarr=[];
    const blocks = [['B', 'O'],['X', 'K'],['D', 'Q'],['C', 'P'],['N', 'A'],['G', 'T'],['R', 'E'],['T', 'G'],['Q', 'D'],['F', 'S'],['J', 'W'], ['H', 'U'],['V', 'I'],['A', 'N'], ['O', 'B'],['E', 'R'],  ['F', 'S'], ['L', 'Y'], ['P', 'C'], ['Z', 'M']];
  const lettersneeded= word.split('');
  lettersneeded.forEach(letter=>{
    let fil= blocks.filter((arr)=>{
      return arr.includes(letter)
    });
    fil.forEach((elem)=>{
      if(!arrofblocks.includes(elem)){
        arrofblocks.push(elem);
      }
    })
  });
    const iswordMatch=(word,arrofblocks)=>{
        let letters=word.split('');
        let arr=[];
        let ismatched=false;
        while(!ismatched){
            letters.forEach((letter)=>{
                let isavailable= arrofblocks.find(e=>e.find(e=>e===letter));
                console.log(isavailable)
                if(isavailable) {
                     arr.push(letter)
                     let newword=arr.join("");
                     let indexNo=arrofblocks.findIndex((elem)=>elem===isavailable);
                     delete arrofblocks[indexNo];
                     if(newword===word){
                        return ismatched=true;
                     }
                    };
            });
            console.log(arr)
            if(ismatched===false) break;
        }
    }
    iswordMatch(word,arrofblocks)


    console.log(arrofblocks,wordsarr);
  
  }
  canMakeWord('COP')
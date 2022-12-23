const str = 'xy';
const findingMissingLetter=(str)=>{
    const alphabets= new Array(26).fill("").map((_,i)=> String.fromCharCode(i+65).toLocaleLowerCase());
    const startingIndex = alphabets.findIndex(e=>e===str[0]);
    const result = alphabets.slice(startingIndex).find((e,i)=> e !==str[i])

    console.log(startingIndex,result);
};
findingMissingLetter(str)
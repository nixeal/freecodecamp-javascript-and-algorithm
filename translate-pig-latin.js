function translatePigLatin(str) {
    const ay = "ay";
    const way = 'way';
    const letters = str.split('');
const vowels = ['a','e','i','o','u'];
const vowelsInString = vowels.filter((vowel)=> letters.find(letter=>vowel===letter));
const firstCatchedVowelIndex = letters.findIndex((letter)=>vowelsInString.includes(letter) );
if(firstCatchedVowelIndex===0){
    str=str+way;
}else{
    const sString = str.slice(0,firstCatchedVowelIndex);
    const lString = str.slice(firstCatchedVowelIndex);
    str=lString+sString+ay;
}
console.log(vowels,vowelsInString,firstCatchedVowelIndex,str)

    return str;
}

translatePigLatin("glove");
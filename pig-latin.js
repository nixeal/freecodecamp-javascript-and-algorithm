function translatePigLatin(str) {
    const ay = "ay";
    const way = 'way';
    const letters = str.split('');
const vowels = ['a','e','i','o','u'];
const vowelsInString = vowels.filter((vowel)=> letters.find(letter=>vowel===letter));
if(vowelsInString.length){
const firstCatchedVowelIndex = letters.findIndex((letter)=>vowelsInString.includes(letter) );
if(firstCatchedVowelIndex===0){
    str=str+way;
}else{
    const sString = str.slice(0,firstCatchedVowelIndex);
    const lString = str.slice(firstCatchedVowelIndex);
    str=lString+sString+ay;
}}else{
  return str+ay
}
console.log(vowels,vowelsInString,str)

    return str;
}

translatePigLatin("rythm");
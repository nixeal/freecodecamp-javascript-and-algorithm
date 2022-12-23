const str='hy my name is Nischal Shrestha';
const findLongestWord=(str)=>{
const strarray=str.split(' ');
let lw='';
let longestWord= strarray.filter((word)=>{
    if(word.length>lw.length){
        return lw=word
    }
})
console.log(lw);
return lw;
}
findLongestWord(str);
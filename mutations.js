function mutation(arr) {
  let result;
    const[f, s]=arr;
    const first =f.toLowerCase();
    const second =s.toLowerCase();
    const firstArray =first.split('')
    const secondArray = second.split('');
    let fLength = firstArray.length.valueOf();
    let sLength = secondArray.length.valueOf();
        for(let e of secondArray){
            result= firstArray.includes(e);
            if(result){
             continue;
            }else{
             break;
            }   
         }
         console.log(result);
    
    if(result){
        console.log(firstArray,secondArray,result);
        return result;
    }else{
        console.log(firstArray,secondArray,result);
        return result=false;
    }


}

mutation(["hello", "hey"]);
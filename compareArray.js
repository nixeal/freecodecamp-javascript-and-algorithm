const newArray = ['Hello','heyboy'];

const checkingFunction = (arr)=>{
    const[f, s]=arr;
    const first =f.toLowerCase();
    const second =s.toLowerCase();
    const firstArray =first.split('');
    const secondArray = second.split('');
    let fLength = firstArray.length;
    let sLength = secondArray.length.valueOf();
    if(fLength>sLength){
        for(let e of secondArray){
            result= firstArray.includes(e);
            if(result){
             continue;
            }else{
             break;
            }   
         }
         console.log(result);
    }else{
        for(let e of firstArray){
            result = secondArray.includes(e);
           if(result){
            continue;
           }else{
            result = false;
            break;
           }
        }
    }
    
    if(result){
        console.log(firstArray,secondArray,result);
        return result;
    }else{
        console.log(firstArray,secondArray,result);
        return result=false;
    }

}
checkingFunction(newArray);



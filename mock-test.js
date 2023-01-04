var checkRecord = function(s) {
    let splitted= s.split("");
    let obj={
        "A":0,
        "L":0,
        "P":0
    }
    for(let i=0;i<splitted.length;i++){
        let key=splitted[i];
        console.log(key)
        if(key in obj){
            obj[key]+=1
        }   
    }
    let regex=/(L{3,})/gm;
    let isLate=regex.test(s)
    if(isLate===false&& obj.A<2){
        return true;
    }else if(isLate===true&& obj.A<2){
        return false
    }else{
        return false
    }
    
};
checkRecord("AALPPPPPPAL")
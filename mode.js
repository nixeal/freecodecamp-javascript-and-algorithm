function mode(arr) {
    let highcountnum=0;
    let highestcount=0;
    for(let i =0; i<arr.length;i++){
        let paiarr=[];
        let counter = 0;
        let num=0;
        for (let index = 0; index < arr.length; index++) {
            if(arr[index]===arr[i]){
                num=arr[i];
            counter++;
            }
        }
        if(highestcount===counter&& highcountnum===){
            highestcount=counter;
            highcountnum=num;
        }
    }
    console.log(highcountnum,highestcount)
    return true;
  }
  mode([1,2,3,4,3,34,2,4,56,7,7,8,8,8,8,8,8,89,9,99,9,9,]);
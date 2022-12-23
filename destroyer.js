const destroyer =(arr,...args)=>{
    let filteredNumbers = arr.filter((number)=>{
        let  result= args.includes(number);
        if(!result) return number;
            
    })
    console.log(filteredNumbers)

};
destroyer ([2,3],2,3);
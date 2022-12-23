const destroyer =(arr,...args)=>{
const values = arr.filter((eachNumber)=> {
    let num ;
    num=args.includes(eachNumber)
    if(!num)return eachNumber 
    
    });
return values;
    

};
destroyer ([1,2,3,4,4,5,6],2,3);
const str="AACCGGTTTGA";
const findPairingLetter=(str)=>{
    const arr = [["A","T"],["C","G"]];
    const neededPair =arr.find((eachArray)=>{
   return eachArray.includes(str)
    });
    return neededPair;
}
    const DNApairing=(str)=>{
        const dnaArray=str.split('');
        const letters= ["A","T","C","G"];
        let result = [];
        const checking = dnaArray.every((e)=> letters.includes(e));
        if(checking){
             result = dnaArray.map((e)=>{
                const pairs = findPairingLetter(e);
                return pairs;
            })}else{
                console.log("Input Invalid DNA String ")            
            }
            console.log(result)
    }
DNApairing(str)
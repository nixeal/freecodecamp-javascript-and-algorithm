const insertionSort =(array)=>{
    for(let i=1; i<array.length;i++){
        if(array[i]>array[i+1]){
         let temp=array[i+1];
         array[i+1]=array[i];
         array[i]=temp;
        }
        for(let j=i;j>0;j--){
            if(array[j]<array[j-1]){
                let temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
            }
        }
    }
    console.log(array);
return array;

}
insertionSort([1,2,3,5,4])
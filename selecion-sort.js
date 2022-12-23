function selectionSort(array) {
    for(let i=0; i<array.length;i++){
        for(let j=i+1; j<array.length;j++){
            if(array[j]<array[i]){
               let temp= array[j];
               array[j]=array[i];
               array[i]=temp;
               console.log(temp);
            }
        }
    }
    console.log(array)
    
}
selectionSort([2,3,5,4,7,0,99,8,7,234,983774,172738]);
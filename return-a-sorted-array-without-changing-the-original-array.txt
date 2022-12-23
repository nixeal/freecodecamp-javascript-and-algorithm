const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
const mutateArray= arr.map(e=>e).sort((a,b)=>a===b?0:a>b?1:-1);
return mutateArray
  // Only change code above this line
}

nonMutatingSort(globalArray);
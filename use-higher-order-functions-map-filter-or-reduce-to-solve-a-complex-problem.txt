const squareList = arr => {
  // Only change code below this line
  const onlypositive = arr.filter((number)=> Number.isInteger(number)&&number>0).map((number)=> number*number)
  
  return onlypositive;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
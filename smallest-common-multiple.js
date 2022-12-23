function smallestCommons(arr) {
  let [smaller, larger] = arr.sort((a,b) => a-b, 0);
  let range = new Array(larger - smaller + 1).fill("").map((_, i) => i + smaller);
  let mul = 1;
  while(!range.every(n => larger * mul % n === 0)) mul++;
  return larger * mul;
}

smallestCommons([23,18]);
function splitify(str) {
  // Only change code below this line
  const splitting = str.split(" ");
  const regex=str.match(/[^A-z]/g)
  const newStr=str.replace(/[^A-z]/g," ")
  const s=newStr.split(" ")
    console.log(splitting,s)
    return s
  // Only change code above this line
}

splitify("Hello World,I-am code");
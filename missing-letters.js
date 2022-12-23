function fearNotLetter(str) {
  let chars = new Array(26).fill("").map((_, i) => String.fromCharCode(i+65).toLowerCase());
  let startIndex = chars.indexOf(str[0]);
  return chars.slice(startIndex).find((c, i) => c !== str[i]);
}

fearNotLetter("abce");
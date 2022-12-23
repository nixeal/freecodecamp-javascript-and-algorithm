function translatePigLatin(str) {
  let consonants = str.match(/^[^aeiou]*/g)[0];
  let result = str.slice(consonants.length) + consonants + (consonants?"":"w") + "ay";
  return result;
}

translatePigLatin("onsonant");
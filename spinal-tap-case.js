function spinalCase(str) {
  const firstLetter = str.charAt(0).toLowerCase();
  console.log(`First letter is "${firstLetter}"`);
  const remaining = str.slice(1);
  console.log(`Processing "${remaining}"`);
  const stage1 = remaining.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
  console.log(`Splitting UpperCase: "${stage1}"`);
  const stage2 = stage1.replace(/[^A-Za-z]/g, " ");
  console.log( `Replacing Special Chars: "${stage2}"`);
  const result = firstLetter + stage2.replace(/\s+/g, "-");
  console.log("Result is: " + result)
  return result;
}

spinalCase('This Is Spinal Tap thisIsSpinalTap');
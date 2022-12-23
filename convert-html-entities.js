function convertHTML(str) {
  const andMatch = str.replace(/([&])/g, `&amp;`);
  const ltMatch = andMatch.replace(/([<])/g, `&lt;`).replace(/([<])/g, `&lt;`).replace(/([>])/g, `&gt;`).replace(/["]/g, `&quot;`).replace(/[']/g,`&apos;`)
  console.log(ltMatch);
  return ltMatch;
}

convertHTML('Dolce "&" Gabbana');
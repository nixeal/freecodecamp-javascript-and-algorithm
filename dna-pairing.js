function pairElement(str) {
  let pairs = [["A", "T"], ["C", "G"]];
  let findPair = (g) => pairs.find(pair => pair.includes(g)).find(gComp => gComp !== g);
  return str.split("").map(g => [g, findPair(g)])
}

pairElement("GCG");
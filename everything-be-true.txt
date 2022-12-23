function truthCheck(collection, pre) {
  const res = collection.every((obj)=>{
    console.log(obj[pre])
    if(Boolean(obj[pre]) ===true)return true;
    return false;
  })
  return res;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
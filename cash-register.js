const cashDenominations = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

function checkCashRegister(price, cash, cid) {
  let changeAmount = cash - price;
  let change = [];
  let cashInRegister = totalCid(cid);
  if (changeAmount === cashInRegister) return {
    status: "CLOSED",
    change: cid
  }
  for (let i = cid.length - 1; i > -1; i--) {
    let currentBill = cid[i];
    let maxValue = currentBill[1];
    let billName = currentBill[0];
    let nearestFloorValueForChange = closestBaseAmount(changeAmount, cashDenominations[billName]);
    let amountToBeTakenIntoChange = maxValue > nearestFloorValueForChange ? nearestFloorValueForChange : maxValue;
    if(amountToBeTakenIntoChange !== 0) change.push([billName, amountToBeTakenIntoChange]);
    changeAmount -= amountToBeTakenIntoChange;
    changeAmount = Math.round(changeAmount * 100) / 100;
  }
  if(changeAmount !== 0){
    return {status:"INSUFFICIENT_FUNDS", change:[]}
  }
  return {
    status:"OPEN",
    change
  }
}

let closestBaseAmount = (total, base) => Math.floor(total / base) * base;

let totalCid = (cid) => cid.reduce((a, x) => a + x[1], 0)
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
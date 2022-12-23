function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let changes = {
        PENNY: 0.01,
        NICKEL: 0.1,
        DIME: 0.5,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        ONEHUNDRED: 100
    };
    const total = cid.reduce((acc, x) => {
        acc = x[1] + acc
        return acc
    }, 0);
    const getEquivalent=(changes,str)=>{
        let num=0;
        for(let change in changes){
            let s=change.toString();
            if(s===str){
                num=changes[s]
            }
        }
        return num;
    }
    const findAvailableCash = (total, arr) => {
        let withdrawableAmount = 0;
        const [name, amount] = arr;
       const val= getEquivalent(changes,name)
   
       console.log(val,name,amount,withdrawableAmount)
    }
    findAvailableCash(total,cid[0])
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
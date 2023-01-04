function checkCashRegister(price, cash, cid) {
    const money = [{PENNY:0.01}, {NICKEL: 0.05}, {DIME: 0.1}, {QUARTER:0.25},{ ONE: 1}, {FIVE: 5}, {TEN:10}, {TWENTY: 20}, {ONEHUNDRED: 100}];
    const mon = money.reverse();
    let change = cash - price;
    let changes = cid.reduce((acc,inital)=>{},[])
    if (change < 0) return { status: "INSUFFICENT_FUNDS", change: [] };
    const totalcash = cid.reduce((a, x) => { return a + x[1] }, 0);
    if (change === totalcash) return { status: "CLOSED", change: [...cid] };
    while (change >= 0) {
        let filtered = mon.find((arrs) => change>=arrs[1]);
        const[name,cashno]=filtered;
         const r = Math.floor(change / cashno)
        const s=change%cashno;
        changes.push([name, r * cashno]);
        change = change - r * cashno;
        if(change<0) break;
    }

    return { status: "OPEN", change: [...changes] }
}

checkCashRegister(0.01, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
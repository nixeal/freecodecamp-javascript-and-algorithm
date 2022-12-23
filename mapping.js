function mutation(arr) {
    const transcationArray = [{ name: 'Five', cash: 8000 },{ name: 'Four', cash: 8000 },{ name: 'One', cash: 8000 }, { name: 'Two', cash: 6000 }, { name: 'Three', cash: 7000 }];
    const noOfComapany = transcationArray.length.valueOf();
    //first add the cash total amount
    const totalAmount = transcationArray.reduce((a, x) => {
        return x.cash + a;
    }, 0);
    const tAmount = totalAmount / noOfComapany;
    const lowCashcompany = [];
    const highCashCompany = [];
    transcationArray.forEach((company) => {
        company.cash > tAmount ? highCashCompany.push(company) : lowCashcompany.push(company);
    });

    const editCashAmount=(company,cash)=>{
        const edit =transcationArray.find((innerCompany)=> innerCompany.name === company.name);
        edit.cash=cash;
        return {
            ...edit
        }
    }
    const editCompanyName =(company,name)=>{
        const edit = transcationArray.find((innerCompany)=>innerCompany.name ===company.name);
        edit.name = name;
        return{
            ...edit
        }
    }

    const newArray = transcationArray.map((company) => {
        let amount = 0;
        if (company.cash === tAmount) {
            return company
        } else {
            return {
                ...company,
                amount: company.cash - tAmount,
                method: company.cash > tAmount ? 'withdraw from ' + company.name : 'desposit to ' + company.name,
                editCashAmount:(cash)=> editCashAmount(company,cash),
                editCompanyName:(name)=>editCompanyName(company,name)
            };
        }
    });

    const loopingThroughCompany =newArray.forEach((company)=>{
        console.log(company.editCompanyName('Nischal'))
    });



}

mutation(["hello", "hey"]);
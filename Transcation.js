const transcationArray = [{name:'five',cash:8000},{name:'four',cash:8000},{name:'One',cash:8000},{name:'Two',cash:6000},{name:'Three',cash:7000}];
const noOfComapany = transcationArray.length.valueOf();
//first add the cash total amount
 const totalAmount =transcationArray.reduce((a,x)=>{
        return x.cash+a;
},0);
const tAmount = totalAmount/noOfComapany;
const lowCashcompany = [];
const highCashCompany = [];
//check company cash is less or greater than company
  transcationArray.forEach((company)=>{
    company.cash>tAmount?highCashCompany.push(company):lowCashcompany.push(company);
  });
  
    const newArray=transcationArray.map((company)=>{
      let amount=0;
      if(company.cash===tAmount){
       return company
      }else{
        return {
          ...company,
          amount:Math.abs(company.cash-tAmount),
          method:company.cash>tAmount?'withdraw from '+company.name:'desposit to '+company.name
        }

      };
    });
    newArray.forEach((company)=>{
        if(!company.method){
         return;   
        }
      console.log(`${company.method}`,`${company.amount}`)
    })


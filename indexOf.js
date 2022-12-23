
const name = 'one';

const checkingNameExistsOnDatas=(name, datas = ['one', 'two','three','four'])=>{
    console.log(name,datas)
    const indexValue =datas.indexOf(name);
    indexValue === -1?console.log(false):console.log(true);
}

checkingNameExistsOnDatas(name);
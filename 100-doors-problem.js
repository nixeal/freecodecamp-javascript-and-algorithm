function getFinalOpenedDoors(numDoors) {
    let doors=new Array(100).fill("").map((_)=>"closed");
    let persons=new Array(100).fill("").map((_,i)=>i+1);
    persons.forEach((person)=>{
    let noofdoorstotravel=numDoors;
    while(noofdoorstotravel>0){
        if(noofdoorstotravel%person===0){
            doors[noofdoorstotravel-1]==='closed'? doors[noofdoorstotravel-1]='opened':doors[noofdoorstotravel-1]='closed'
            console.log('can acess door',noofdoorstotravel,person);
        }
        noofdoorstotravel--;
    }
    })
    const openedDoors= doors.map((door,i)=>door==='closed'? door:door=i+1);
    const onlyopeneddoors= openedDoors.filter((door)=>door!=='closed');
    console.log(openedDoors)
  
    return onlyopeneddoors;
  
  }
  getFinalOpenedDoors(100);
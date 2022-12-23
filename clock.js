const func=(hr, min)=>{
    let degreeOfMinuteHand;
    let degreeOfHourHand;
    const fullDegree = 360;
    const degreePerMin = fullDegree/(12*60);
    const degreePerHr = fullDegree/12;
    if(hr ===12){
        hr =0;
        degreeOfHourHand = degreePerHr*hr;
        degreeOfMinuteHand=degreePerMin*min;

    }else{
        degreeOfMinuteHand = degreePerMin*min;
        degreeOfHourHand= degreePerMin*(hr*60);

    }
    console.log(degreeOfHourHand,degreeOfMinuteHand);
}
func(12,45);
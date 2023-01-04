function getDPA(num) {
    let deficient = 0;
    let abundant = 0;
    let perfect = 0;
    for (let index = 0; index < num; index++) {
        let properDivisor = [];
        let trackingchangednumber=num-index;
        for (let i = 1; i <= trackingchangednumber; i++) {
            if (trackingchangednumber % i === 0) {
                properDivisor.push(i);
            }
        };
        let summationOfPerfectSquare = properDivisor.reduce((acc, inital) => acc = inital + acc, 0);
        if (summationOfPerfectSquare < trackingchangednumber) {
            deficient++;
            console.log(deficient)
        } else if (summationOfPerfectSquare > trackingchangednumber) {
            abundant++;
            console.log(abundant);

        } else {
            perfect++;
            console.log(summationOfPerfectSquare,properDivisor)

        }
    }

    console.log(perfect,abundant,deficient);
}
getDPA(5000);
const returnFirstTwoDrivers = (arrayDrivers) => {
    let one, two;
    [one, two] = arrayDrivers;
    return [one, two]
}

const returnLastTwoDrivers = (arrayDrivers) => {
    let one = arrayDrivers[arrayDrivers.length-2];
    let two = arrayDrivers[arrayDrivers.length-1];
    return [one, two]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (mult) => {
    return function(fare) { 
        return fare * mult
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (arrayDrivers, func) => {
    return func(arrayDrivers)
}


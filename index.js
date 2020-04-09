const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (i) => {
    return (x) => x * i
}

const fareDoubler = (i) => {
    return createFareMultiplier(i)(2)
}

const fareTripler = (i) => {
    return createFareMultiplier(i)(3)

}

const selectDifferentDrivers = (array, f) => {
    return f(array)
}



// selectDifferentDrivers() — This function takes two arguments, an array of drivers and 
// either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two 
// arguments, selectDifferentDrivers() will return either the first two drivers or the last two 
// drivers.
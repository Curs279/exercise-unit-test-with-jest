// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar/ oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen/ oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}




// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};
test("One dollar should be 106.583 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(532.915); 
})

test("One euro should be 1.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One yen should be 0.006 pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(3)).toBe(0.018); 
})
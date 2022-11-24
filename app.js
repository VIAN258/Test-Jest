const fromDollarToYen = function (dollar){
    let yen = dollar *106.583;
    return yen
}

const fromEuroToDollar = function(euro){
    let dollar =  euro * 1.2;
    return dollar;
}

const fromYenToPound = function (yen){
    let pound = yen * 0.006;
    return pound;
}

module.exports = {fromEuroToDollar, fromYenToPound, fromDollarToYen}

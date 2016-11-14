function Payee (firstName, lastName, salary, superRateStr, payPeriod) {
    this.name = getName(firstName, lastName);
    this.payPeriod = payPeriod;
    this.grossIncome = getGrossIncome(salary);
    this.incomeTax = getIncomeTax(salary);
    this.netIncome = this.grossIncome - this.incomeTax;
    var superRate = convertToDecimal(superRateStr);
    this.totalSuper = Math.round(this.grossIncome * superRate);
}


function getName (firstName, lastName) {
    return firstName + " " + lastName;
}

function convertToDecimal (percent) {
    return parseInt(percent) / 100;
}

function getGrossIncome (salary) {
    return Math.round(salary / 12);
}

function getIncomeTax (salary) {
    var taxBracket = findTaxBracket(salary);
    taxToBePaid = (taxBracket.previousBracketTax + (salary - taxBracket.lower) * taxBracket.rate) / 12;
    return Math.round(taxToBePaid);

}

function findTaxBracket (salary) {

    var taxTable = [{
        lower:0,
        upper:18200,
        rate:0,
        previousBracketTax: 0
    },{
        lower:18201,
        upper:37000,
        rate:0.19,
        previousBracketTax: 0
    },{
        lower:37001,
        upper:80000,
        rate:0.325,
        previousBracketTax: 3572
    },{
        lower:80001,
        upper:180000,
        rate:0.37,
        previousBracketTax: 17547
    },{
        lower:180001,
        upper:0,
        rate:0.45,
        previousBracketTax: 54547
    }];

    for (var i = 0; i < taxTable.length; i++) {
        if (salary < taxTable[i].upper) {
            return taxTable[i];
        }
    }

    // if Salary is above 180,000, return highest tax bracket
    return taxTable[i - 1];
}

module.exports = Payee;


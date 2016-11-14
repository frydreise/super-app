var fs = require("fs");
var parse = require("csv-parse");
var generate = require("csv-generate");
var file = process.argv[2] || "/tests/input.csv";

var people = [];
var Payee = require("./Payee");

var parser = parse({delimiter: ","}, function(err, data){

  main(data);

});

fs.createReadStream(__dirname+file).pipe(parser);

function main (data) {

    for (var i = 0; i < data.length; i++) {
        var p = new Payee(...data[i]);
        var output = `${p.name},${p.payPeriod},${p.grossIncome},${p.incomeTax},${p.netIncome},${p.totalSuper}`;
        console.log(output);
    }
}

// super-test.js
var chai = require('chai');
var expect = chai.expect;
var Payee = require('./../Payee');

describe('Payslip calculation', function() {
  it('David Rudd Test Case', function() {
    var person = new Payee("David","Rudd",60050,"9%","01 March – 31 March");
    expect(person.grossIncome).to.equal(5004);
    expect(person.incomeTax).to.equal(922);
    expect(person.netIncome).to.equal(4082);
    expect(person.totalSuper).to.equal(450);
  });
  it('Ryan Chen Test Case', function() {
    var person = new Payee("Ryan","Chen",120000,"10%","01 March – 31 March");
    expect(person.grossIncome).to.equal(10000);
    expect(person.incomeTax).to.equal(2696);
    expect(person.netIncome).to.equal(7304);
    expect(person.totalSuper).to.equal(1000);
  });

  it('Very Poor Person Test Case', function() {
    var person = new Payee("Poor","Person",1,"10%","01 March – 31 March");
    expect(person.grossIncome).to.equal(0);
    expect(person.incomeTax).to.equal(0);
    expect(person.netIncome).to.equal(0);
    expect(person.totalSuper).to.equal(0);
  });

  it('Very Rich Person Test Case', function() {
    var person = new Payee("Richie","Rich",1000000,"1%","01 March – 31 March");
    expect(person.grossIncome).to.equal(83333);
    expect(person.incomeTax).to.equal(35296);
    expect(person.netIncome).to.equal(48037);
    expect(person.totalSuper).to.equal(833);
  });

  it('Decimals everywhere', function() {
    var person = new Payee("Half","Way",10001,"1.54%","01 March – 31 March");
    expect(person.grossIncome).to.equal(833);
    expect(person.incomeTax).to.equal(0);
    expect(person.netIncome).to.equal(833);
    expect(person.totalSuper).to.equal(8);
  });
});

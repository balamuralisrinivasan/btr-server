var casual = require('casual');
//import casual from casual;


const mocks = {
  String: () => 'It works!',
  Query: () => ({
    transactions: (root, args) => {
      return { id: args.accts};
    },
  }),
  Transaction: () => ( tranData()),
};

function tranData( ){
 var tranArray = [];
 var index =0;
 

 for ( index=0; index < 20; index ++)
 {
   var amount = round(casual.double(),2);
   var id  = casual.integer();
    id = (id < 0) ? id * -1 : id;
    amount = (amount < 0) ? amount * -1 : amount;

   

    var tran = {};
    tran.creditAcctName = casual.company_name;
    tran.debitAcctName = casual.company_name;
    tran.amount = amount;
    tran.id = id;

    tran.tranDate = casual.date();
    tran.tranRemarks = casual.words(7);;
    tran.tranRef = casual.word;
    
     tranArray.push(tran);

 }
 return tranArray;
};

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp  = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

module.exports = mocks;

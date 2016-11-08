import casual from 'casual';




const mocks = {
  String: () => 'It works!',
   Query: () => ({
    transactions: (root, args) => {
      return { id: args.accts};
    },
    currentAccount: (root, args) => {
      return { id: args.accountID};
    },
    loanAccount: (root, args) => {
      return { id: args.accountID};
    }
  
  }),
  Transaction: () => ( tranData()),
  CurrentAccount: () => (currentAcctData()),
  LoanAccount: () => (loanAcctData()),
  

};

function getBICCode()
{
  var item = casual.random_element(['ABNAAEAAIPC', 'AEINAEADXXX', 'ABNAAEADSHJ','EBILAEADBTA',
  'EBILAEADFIN']);
  return item;
}

function getIBANCode()
{
  var ibanData = ['AE070331234567890123456','AE070333439567890123456','AE0703392789678901234826','AE070339874567890733489'];

  return casual.random_element(ibanData);
}

function currentAcctData() {
  var acct = {};
  acct.iban = getIBANCode();
  acct.ccy = casual.currency_code;
  acct.name = casual.company_name;
  acct.bic = getBICCode();
  acct.availableBalance = getAmount();
  acct.address = getAddress();
  acct.transactions = tranData();

  return acct;

}

function loanAcctData() {
  console.log('Loan Account data');
  var acct = {};

  acct.iban = getIBANCode();
  acct.ccy = casual.currency_code;
  acct.name = casual.company_name;
  acct.bic = getBICCode();

  acct.outStandingAmount = getAmount();
  acct.principle = getAmount();
  acct.lastDisbursedDate = randomDate();//casual.date('YYYY-MM-DD');
  console.log(acct.lastDisbursedDate);
  acct.address = getAddress();



  return acct;

}

function randomDate(){
   var startDate = new Date(2012,0,1).getTime();
   var endDate =  new Date(2015,0,1).getTime();
   var spaces = (endDate - startDate);
   var timestamp = Math.round(Math.random() * spaces);
   timestamp += startDate;
   return new Date(timestamp).toISOString().substring(0, 10);
}
function formatDate(date){
    var month = randomDate().getMonth();
    var day = randomDate().getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

}




function getAddress()
{
  var address = {};

  address.strtNum = casual.street;
  address.buildingNum = casual.building_number;
 address.postalCode = casual.zip();
 address.city = casual.city;
 address.country = casual.country;

  return address ;
}

function getAmount() 
{

   var amount = round(casual.double(9000,67689383),2);
   var id  = casual.integer();
    id = (id < 0) ? id * -1 : id;
    amount = (amount < 0) ? amount * -1 : amount;

    return amount;

}

function tranData( ){
 var tranArray = [];
 var index =0;
 

 for ( index=0; index < 20; index ++)
 {
   var amount =  getAmount();

    var tran = {};
    tran.bankReferenceNo = casual.integer(123456789, 987654321);
    tran.instrumentID = casual.integer(623456789, 787654321);
    tran.EndToEndID = casual.integer(523456789, 687654321);
    tran.amount = amount;
    tran.creditAcctIBAN = getIBANCode();
    tran.debitAcctIBAN = getIBANCode();
    
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


export default mocks;

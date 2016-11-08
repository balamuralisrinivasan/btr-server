const typeDefinitions = `

type Transaction {
  bankReferenceNo: Int
  instrumentID: String
  EndToEndID: String
  creditAcctIBAN: String
  debitAcctIBAN: String
  amount: Float
}

type CurrentAccount {
  iban: String
  ccy: String
  name: String
  bic: String
  availableBalance: String
  address: AccountAddress
  transactions: [Transaction]
}

type LoanAccount {
  iban: String
  ccy: String
  name: String
  bic: String
  outStandingAmount : String
  principle: String
  lastDisbursedDate: String
  address: AccountAddress

}

type AccountAddress {

strtNum: String
buildingNum: String
postalCode: String
city: String
country: String


}


input Account {
  acctid: String

}


type Query {
 transactions(accts: [Account]): [Transaction]
 
 currentAccount(accountID: String): CurrentAccount
 
 loanAccount(accountID: String): LoanAccount
 

}



schema {
  query: Query
}



`;

export default [typeDefinitions];

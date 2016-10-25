const typeDefinitions = `

type Transaction {
  id: Int
  creditAcctName: String
  debitAcctName: String
  amount: Float
  tranDate: String
  tranRef: String
  tranRemarks: String
}

input Account {
  acctid: String

}


type Query {
 transactions(accts: [Account]): [Transaction]

}



schema {
  query: Query
}



`;

module.exports = typeDefinitions;


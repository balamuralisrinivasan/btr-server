#btr server

query {
  transactions (accts:[
      {acctid: "100"},
    	{acctid : "200"}
  						])
  {
    creditAcctName
    debitAcctName
    amount
    id
    tranRef
    tranDate
    tranRemarks
  }
}
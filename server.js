import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
import Mocks from './data/mocks';
 

/**var express = require('express');
var { apolloServer } = require('graphql-tools');
var Schema = require('./data/schema');
var Mocks = require('./data/mocks');
*/


const GRAPHQL_PORT =process.env.PORT || 3000;


const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: Mocks,
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

/**
 * query {
  transactions (accts:[
      {acctid: "100"},
    	{acctid : "200"}
  						])
  {
    creditAcctName
    debitAcctName
    amount
    id
  }
}
 * 
 * 
 */

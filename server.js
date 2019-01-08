import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

require('dotenv').config({path: 'variables.env'});

const app = express();

const apollo = new ApolloServer({ 
  typeDefs, 
  resolvers,
  formatError: error => {
  //console.log(error);
  //return new Error('Internal server error');
  // Or, you can delete the exception information
  delete error.extensions;
  return error;
}});
apollo.applyMiddleware({ app })

// Adatbázis kapcsolódás
mongoose.connect(process.env.DB_CONNECTION_STRING,{ useNewUrlParser: true })
  .then(() => {
    console.log(`🚀 Database Connected sucessfully!`);
  })
  .catch(err => {
    console.log(err);
  })
;
//Alkalmazás elindítása
app.listen({url: process.env.URL,port:process.env.PORT}, () =>
  console.log(`🚀 Server ready at ${process.env.URL}:${process.env.PORT}`)
);
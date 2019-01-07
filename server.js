import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

require('dotenv').config({path: 'variables.env'});

const app = express();
const apollo = new ApolloServer({ typeDefs, resolvers});

apollo.applyMiddleware({ app })

mongoose.connect(process.env.DB_CONNECTION_STRING,{ useNewUrlParser: true })
  .then(() => {
    console.log(`🚀 Database Connected sucessfully!`);
  })
  .catch(err => {
    console.log(err);
  })
;
app.listen({url: process.env.URL,port:process.env.PORT}, () =>
  console.log(`🚀 Server ready at ${process.env.URL}:${process.env.PORT}`)
);
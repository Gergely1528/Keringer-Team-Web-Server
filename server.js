import express from 'express';
import { ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

const app = express();
const apollo = new ApolloServer({ typeDefs, resolvers });
const users = [];
apollo.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)
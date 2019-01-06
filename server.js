import express from 'express';
import { ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

const app = express();
const apollo = new ApolloServer({ typeDefs, resolvers});

apollo.applyMiddleware({ app })

mongoose.connect('mongodb://elynea:Narzie2012rohaN@ds137019.mlab.com:37019/keringerteam',{ useNewUrlParser: true })
  .then(() => {
    console.log(`🚀 Database Connected sucessfully!`);
  })
  .catch(err => {
    console.log(err);
  })
;
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
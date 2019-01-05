import * as User from './user';
import * as Roles from './roles';

const types = [];
const queries = [];
const mutations = [];

const schemas = [User,Roles];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
});

export default `


  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }

  type Mutation {
    ${mutations.join('\n')}
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

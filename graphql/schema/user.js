export const types = `
  type User {
    id: ID!
    email: String!
    password: String!
  }
`;

export const queries = `
  teszt: String
  hello: String
  getUser(email: String!): User 
  allUser: [User!]!
`;

export const mutations = `
  createUser(email: String!, password: String!): User

`;

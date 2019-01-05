export const types = `
  type User {
    id: Int!
    email: String!
    password: String!
  }
`;

export const queries = `
  getUser(id: Int!): User 
  allUsers(key: Int!, limit: Int!): [User!]!
`;

export const mutations = `
  createUser(title: String!): User!

`;

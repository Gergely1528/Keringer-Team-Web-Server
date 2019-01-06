export const types = `
  type User {
    id: ID!
    email: String!
    password: String!
  }
`;

export const queries = `
  getUser(id: Int!): User 
  allUser: [User!]!
`;

export const mutations = `
  createUser(email: String!, password: String!): User

`;

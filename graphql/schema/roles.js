export const types = `
  type Roles {
    id: ID!
    Create: Boolean
    Update: Boolean
    Read: Boolean
    Delete: Boolean
  }
`;

export const queries = `
  ReadRole: Boolean 
  ReadRoles: Boolean
`;

export const mutations = `
CreateRole: Boolean 
UpdateRole: Boolean 
DeleteRole: Boolean 

`;
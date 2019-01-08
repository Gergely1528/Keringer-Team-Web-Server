import { gql } from 'apollo-server-express';

export default gql`
"""Felhasználói jogosultságok."""    
type Permission {
    """A jogosultság bejegyzés egyedi azonosítója az adatbázisban."""
    id: ID
    """A felhasználó email címe a jogosultságok rendszerezéséhez."""
    email: String
    """Jogosultság a saját felhasználói adatainak lekérdezésére. """
    readUser: Boolean
    """Jogosultság az összes felhasználó adatainak lekérdezésére."""
    readUsers: Boolean
    """Jogosultság új felhasználó létrehozására. """
    createUser: Boolean
    """Jogosultság a felhasználói adatok módosítására."""
    updateUser: Boolean
    """Jogosultság felhasználó törlésére."""
    deleteUser: Boolean
    """Belépési engedély a rendszerbe."""
    loginUser: Boolean   
}


extend type Query {
    readPermission(email: String): Permission
} 
    
extend type Mutation {
    createPermission(email: String): Permission
    updatePermission(email: String): Permission
    deletePermission(email: String): Permission
}
`
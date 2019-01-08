import { gql } from 'apollo-server-express';  //gql típus importálása

export default gql`
"""Felhasználók."""
type User {
    """A felhasználó egyedi azonosítója."""
    id: ID!
    """A felhasználó Email címe."""
    email: String! 
    """ A felhasználó jelszava."""
    password: String! 
    """ A felhasználó vezetékneve."""
    firstname: String! 
    """ A felhasználó keresztneve."""
    lastname: String!  
    """ A felhasználót kétrehozó felhasználó (vezetéknév + keresztnév)."""
    creator: String!
    """ A felhasználó létrehozásának dátuma."""
    created: String! 
    """ A felhasználót változtató felhasználó (vezetéknév + keresztnév)."""
    updater: String
    """ A felhasználó változtatásának dátuma."""
    updated: String 
}
"""Felhasználók típus lekérdezései"""
type Query {
    """Aktuális felhasználó lekérdezése."""
    readUser(email: String): User
    """Az összes felhasználó lekérdezése."""
    readUsers: [User!]!
} 
"""Felhasználók típus mutációi"""    
type Mutation {
    """Felhasználó létrehozása"""  
    createUser(email: String password: String, firstname: String, lastname: String, creator: String, created: String, updater: String, updated: String): User
    """Felhasználó módosítása"""  
    updateUser(email: String, firstname: String, lastname: String, updater: String, updated: String): User
    """Felhasználó törlése"""  
    deleteUser(email: String): User
    """Felhasználói belépés""" 
    loginUser(email:String, password: String): Token
}
`
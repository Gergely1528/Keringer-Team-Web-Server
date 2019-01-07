import { gql } from 'apollo-server-express';

export default gql`
"""Felhasználói jogosultságok."""    
type Permission {
    """A felhasználó egyedi azonosítója."""
    id: ID
    """Aktuális felhasználó lekérdezése."""
    readUser: Boolean
    """Az összes felhasználó lekérdezése."""
    readUsers: Boolean
    """Felhasználó létrehozása"""
    createUser: Boolean
    """Felhasználó módosítása"""
    updateUser: Boolean
    """Felhasználó törlése"""
    deleleteUser: Boolean
    """Felhasználói belépés"""
    loginUser: Boolean
}


extend type Query {
    readpermission: Permission
    readpermissions: [Permission!]!
} 
    
extend type Mutation {
    createPermission("""A felhasználó egyedi azonosítója."""
    id: ID
    """Aktuális felhasználó lekérdezése."""
    readUser: Boolean
    """Az összes felhasználó lekérdezése."""
    readUsers: Boolean
    """Felhasználó létrehozása"""
    createUser: Boolean
    """Felhasználó módosítása"""
    updateUser: Boolean
    """Felhasználó törlése"""
    deleleteUser: Boolean
    """Felhasználói belépés"""
    loginUser: Boolean): Permission
    updatePermission("""A felhasználó egyedi azonosítója."""
    id: ID
    """Aktuális felhasználó lekérdezése."""
    readUser: Boolean
    """Az összes felhasználó lekérdezése."""
    readUsers: Boolean
    """Felhasználó létrehozása"""
    createUser: Boolean
    """Felhasználó módosítása"""
    updateUser: Boolean
    """Felhasználó törlése"""
    deleleteUser: Boolean
    """Felhasználói belépés"""
    loginUser: Boolean): Permission
    deletePermission("""A felhasználó egyedi azonosítója."""
    id: ID
    """Aktuális felhasználó lekérdezése."""
    readUser: Boolean
    """Az összes felhasználó lekérdezése."""
    readUsers: Boolean
    """Felhasználó létrehozása"""
    createUser: Boolean
    """Felhasználó módosítása"""
    updateUser: Boolean
    """Felhasználó törlése"""
    deleleteUser: Boolean
    """Felhasználói belépés"""
    loginUser: Boolean): Permission
}
`
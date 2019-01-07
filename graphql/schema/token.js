import { gql } from 'apollo-server-express';  //gql típus importálása

export default gql`
"""Authorizációs Token."""
type Token {
    """JWT Token"""
    token: String!
}
`
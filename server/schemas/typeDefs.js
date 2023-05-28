const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedExcersice:String
  
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

 type Mutation {
    login(email: String!, password: String!): Auth
    adduser(username: String!, email: String!, password: String!): Auth
}
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports=typeDefs
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
 mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      savedExcersice
    }
  }
}
`;

export const ADD_USER = gql`
 mutation adduser($username: String!, $email: String!, $password: String!) {
  adduser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      savedExcersice
    }
  }
}
`;



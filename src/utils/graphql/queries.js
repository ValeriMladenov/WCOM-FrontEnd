import gql from "graphql-tag";

// eslint-disable-next-line import/prefer-default-export
export const LOAD_USER = gql`
  {
    loadUser {
      firstName
      lastName
      avatarImage
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

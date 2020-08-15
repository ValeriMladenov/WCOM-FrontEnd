import gql from "graphql-tag";

export const LOAD_USER = gql`
  {
    loadUser {
      firstName
      lastName
      avatarImage
    }
  }
`;

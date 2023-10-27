import { gql } from "@apollo/client";
export const ME = gql`
me {
    _id
    username
    email
  }
`;

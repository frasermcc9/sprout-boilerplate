import { gql } from "@apollo/client";

export const QUERY_RANDOM_NUMBER = gql`
  query RandomNumber {
    randomNumber
  }
`;

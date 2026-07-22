import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

export { GET_ALL_CHARACTERS };

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFrog = /* GraphQL */ `
  query GetFrog($id: ID!) {
    getFrog(id: $id) {
      id
      name
      price
      description
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFrogs = /* GraphQL */ `
  query ListFrogs(
    $filter: ModelFrogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFrogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

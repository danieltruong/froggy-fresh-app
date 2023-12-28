/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFrog = /* GraphQL */ `
  mutation CreateFrog(
    $input: CreateFrogInput!
    $condition: ModelFrogConditionInput
  ) {
    createFrog(input: $input, condition: $condition) {
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
export const updateFrog = /* GraphQL */ `
  mutation UpdateFrog(
    $input: UpdateFrogInput!
    $condition: ModelFrogConditionInput
  ) {
    updateFrog(input: $input, condition: $condition) {
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
export const deleteFrog = /* GraphQL */ `
  mutation DeleteFrog(
    $input: DeleteFrogInput!
    $condition: ModelFrogConditionInput
  ) {
    deleteFrog(input: $input, condition: $condition) {
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

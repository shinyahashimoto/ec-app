/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      role
      carts {
        items {
          id
          added_at
          description
          gender
          images
          name
          price
          productId
          quantity
          size
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        role
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      added_at
      description
      gender
      images
      name
      price
      productId
      quantity
      size
      user {
        id
        name
        email
        password
        role
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        added_at
        description
        gender
        images
        name
        price
        productId
        quantity
        size
        user {
          id
          name
          email
          password
          role
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      category
      description
      price
      gender
      sizes {
        items {
          id
          productId
          size
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        description
        price
        gender
        sizes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSize = /* GraphQL */ `
  query GetSize($id: ID!) {
    getSize(id: $id) {
      id
      productId
      size
      quantity
      product {
        id
        name
        category
        description
        price
        gender
        sizes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSizes = /* GraphQL */ `
  query ListSizes(
    $filter: ModelSizeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        size
        quantity
        product {
          id
          name
          category
          description
          price
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

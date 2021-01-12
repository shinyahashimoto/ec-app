/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSize = /* GraphQL */ `
  mutation CreateSize(
    $input: CreateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    createSize(input: $input, condition: $condition) {
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
export const updateSize = /* GraphQL */ `
  mutation UpdateSize(
    $input: UpdateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    updateSize(input: $input, condition: $condition) {
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
export const deleteSize = /* GraphQL */ `
  mutation DeleteSize(
    $input: DeleteSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    deleteSize(input: $input, condition: $condition) {
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

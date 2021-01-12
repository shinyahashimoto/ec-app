/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateSize = /* GraphQL */ `
  subscription OnCreateSize {
    onCreateSize {
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
export const onUpdateSize = /* GraphQL */ `
  subscription OnUpdateSize {
    onUpdateSize {
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
export const onDeleteSize = /* GraphQL */ `
  subscription OnDeleteSize {
    onDeleteSize {
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

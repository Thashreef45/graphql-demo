import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    address :Address!
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Query {
    hello: String!
    getUser: User!
  }
`;

export default typeDefs;

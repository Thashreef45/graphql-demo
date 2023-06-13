import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    getUser: User!
  }
`;

export default typeDefs;

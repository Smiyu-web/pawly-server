import { gql } from "apollo-server-express";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

export const typeDefs = gql`
  type Query {
    helloWorld: String!
    weights: [Weight!]!
  }
  type Weight {
    id: ID!
    weightNum: Float!
  }
  type Mutation {
    addWeight(weightNum: Float!): Weight!
  }
`;

import { gql } from "apollo-server-express";

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

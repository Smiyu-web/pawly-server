import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar ISODate

  type Query {
    helloWorld: String!
    weights: [Weight!]!
  }
  type Weight {
    id: ID!
    weightNum: Float!
    createdAt: ISODate
    day: String!
  }
  type Mutation {
    addWeight(weightNum: Float!): Weight!
    updateWeight(id: ID!, updateWeightNum: Float!): Weight!
    deleteWeight(id: ID!): Weight!
  }
`;

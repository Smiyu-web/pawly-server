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
  }
`;
// updateWeight(day: String!, updateWeightNum: Float!): Weight!

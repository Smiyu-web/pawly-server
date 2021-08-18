import { Weight } from "./models/weight";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

// Debug data in mongoDB
(async () => {
  console.log("Weight", await Weight.find());
})``;

export const resolvers = {
  Query: {
    helloWorld: () => "hello world",
    weights: () => Weight.find(),
  },
  Mutation: {
    addWeight: async (_, { weightNum }) => {
      const todayWeight = new Weight({ weightNum });
      await todayWeight.save();
      return todayWeight;
    },
  },
};

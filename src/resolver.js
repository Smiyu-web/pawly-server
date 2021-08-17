import { Weight } from "./models/weight";

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

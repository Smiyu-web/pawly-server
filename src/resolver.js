import { Weight } from "./models/weight";

export const resolvers = {
  Query: {
    helloWorld: () => "hello world",
    weights: () => Weight.find(),
  },
  Mutation: {
    addWeight: async (_, { weight }) => {
      const todayWeight = new Weight({ weight });
      await todayWeight.save();
      return todayWeight;
    },
  },
};

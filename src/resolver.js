import { Weight } from "./models/weight";

const test = async () => {
  console.log("Weight", await Weight.find({}));
};
test();

export const resolvers = {
  Query: {
    helloWorld: () => "hello world",
    weights: () => Weight.find(),
    // weights: () => Weight,
  },
  Mutation: {
    addWeight: async (_, { weightNum }) => {
      const todayWeight = new Weight({ weightNum });
      await todayWeight.save();
      return todayWeight;
    },
  },
};

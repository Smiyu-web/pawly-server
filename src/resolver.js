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
    addWeight: async (_, { weight }) => {
      const todayWeight = new Weight({ weight });
      await todayWeight.save();
      return todayWeight;
    },
  },
};

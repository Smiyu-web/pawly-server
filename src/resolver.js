import { Weight } from "./models/weight";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

// Debug data in mongoDB
(async () => {
  // console.log("Weight", await Weight.find());
})``;

export const resolvers = {
  Query: {
    helloWorld: () => "hello world",
    weights: () => Weight.find(),
  },
  Mutation: {
    addWeight: async (_, { weightNum }) => {
      const date = new Date();
      const day = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;

      const todayWeight = new Weight({ weightNum, day });
      console.log("check date", date);
      await todayWeight.save();
      return todayWeight;
    },
    updateWeight: async (_, { day, updateWeightNum }) => {
      const data = await Weight.findOne({ day: day });
      console.log(data);
      if (!data) {
        throw new Error("Editable data doesn't exist");
      }
      await data.updateOne({ weightNum: updateWeightNum });
      return data;
    },
  },
};

// export const UPDATE_PASSWORD = {
//   type: MessageType,
//   args: {
//     username: { type: GraphQLString },
//     oldPassword: { type: GraphQLString },
//     newPassword: { type: GraphQLString },
//   },
//   async resolve(parent: any, args: any) {
//     const { username, oldPassword, newPassword } = args;
//     const user = await Users.findOne({ username: username });

//     if (!user) {
//       throw new Error("USERNAME DOESNT EXIST");
//     }
//     const userPassword = user?.password;

//     if (oldPassword === userPassword) {
//       await Users.update({ username: username }, { password: newPassword });

//       return { successful: true, message: "PASSWORD UPDATED" };
//     } else {
//       throw new Error("PASSWORDS DO NOT MATCH!");
//     }
//   },
// };

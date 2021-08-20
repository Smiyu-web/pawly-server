require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";
import cors from "cors";

const port = process.env.PORT || 3001;

const server = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }

  app.get("/", (req, res) => res.send("hello world"));

  app.listen(port, () => {
    console.log(`Server Listen START at port=${port}`);
  });
};

server();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "dotenv/config";

import mongoose from "mongoose";

import { typeDefs } from "./graphQl/typeDefs/typeDefs.js";
import resolvers from "./graphQl/resolver/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  console.log("DB connected");
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: process.env.PORT || 4000,
    },
  });
  console.log(`Server running on ${url}`);
});

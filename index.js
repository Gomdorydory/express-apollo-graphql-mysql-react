//main script임
import express from "express";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";

import http from "http";

//__dirname is not defined in ES module scope ERROR
import path from "path";
const __dirname = path.resolve();

// //schema 파일 읽기
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const typeDefs = loadSchemaSync("./src/graphql/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

//resolver, path 불러오기
import resolvers from "./src/graphql/resolvers.js";

//port번호
const port = 4000;
const startApolloServer = async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();

  server.applyMiddleware({ app });

  httpServer.listen(4000, () =>
    console.log(`"graphql api open with playground, 서버 생성 성공,"`)
  );

  app.use(express.static(path.join(__dirname, "frontend_react/build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./frontend_react/build/index.html"));
  });
};

startApolloServer();

//미들웨어 (현재 사용 안함)
// app.use(bodyParserGraphQL());
// app.use(compression());

//const startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

// await server.start();

// server.applyMiddleware({
//   app,
//   path: "/graphql",
// });
// // }

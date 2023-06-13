import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });


  const PORT = 3500;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });

  
}

startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});

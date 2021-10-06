const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const moment = require('moment');

let server = null;

async function startServer() {
  server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(timestamp)
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

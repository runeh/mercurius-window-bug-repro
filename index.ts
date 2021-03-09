import mercurius from "mercurius";
import Fastify from "fastify";

const app = Fastify();

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const resolvers = {
  Query: {
    add: async (_: any, { x, y }: any) => x + y,
  },
};

app.register(mercurius, {
  schema,
  resolvers,

  graphiql: 'playground'
});

app.get("/", async function (_req, reply) {
  const query = "{ add(x: 2, y: 2) }";
  return reply.graphql(query);
});

app.listen(3000);

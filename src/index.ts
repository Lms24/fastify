import "./instrument";

import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.get("/hello", async (request, reply) => {
  return { hello: "world" };
});

server.get("/error", async (request, reply) => {
  throw new Error("error");
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

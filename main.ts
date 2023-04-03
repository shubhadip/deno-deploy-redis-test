import { connect } from "https://deno.land/x/redis/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});


const app = new Application();

app.use(async (ctx) => {
  await redis.set("hoge", "fuga");
  const fuga = await redis.get("hoge");

  ctx.response.body = fuga + " Hello from Deno and AWS Lightsail!";
});

await app.listen({ port: 8000 });
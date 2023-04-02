import { connect } from "https://deno.land/x/redis/mod.ts";
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});
await redis.set("hoge", "fuga");
const fuga = await redis.get("hoge");
console.log("fuga", fuga);
import { Application } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import { quotes } from "./quotes.ts";
import router from "./routes.ts";
const app = new Application({});

app.get("/", (ctx) => {
  return "Hello Welcome to Deno --";
});

app.use("/api", router);

await app.run();

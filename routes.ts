import { Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import { quotes } from "./quotes.ts";

const router = new Router();

router.get("/quotes", (ctx) => {
  return { quotes: quotes };
});

router.get("/randon", (ctx) => {
  return { quote: quotes[Math.round(Math.random() * quotes.length - 1)] };
});

export default router;

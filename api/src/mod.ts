import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/mod.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });
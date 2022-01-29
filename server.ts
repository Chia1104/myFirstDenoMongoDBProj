import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const PORT = 8888;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Server listening on port ${PORT}`);
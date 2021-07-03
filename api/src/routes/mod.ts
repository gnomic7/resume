import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Namaskar! Rohit K Dhakal";
  })
  .get("/addresses", (context) => {
    // context.response.body = Array.from(books.values());
  })
  .get("/experiences/:id", (context) => {
    // if (context.params && context.params.id && books.has(context.params.id)) {
    //   context.response.body = books.get(context.params.id);
    // }
  });
export default router;

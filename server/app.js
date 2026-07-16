import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import * as bookController from "./bookController.js";
import * as chapterController from "./chapterController.js";
import * as todoController from "./todoController.js";
import * as taskController from "./taskController.js";
import * as authController from "./authController.js";
import * as readingProgressController from "./readingProgressController.js";
import * as userController from "./userController.js";
import * as statsController from "./statsController.js"
import * as middlewares from "./middlewares.js";


const app = new Hono();

app.use("/*", cors());

// Admin-only routes
app.use("/api/admin/*", middlewares.authenticate, middlewares.requireAnyRole("ADMIN"));
app.get("/api/admin/users", userController.getAllUsers);
app.get("/api/admin/stats", statsController.getStats);

app.post("/api/books", bookController.create);
app.get("/api/books", bookController.readAll);
app.get("/api/books/:bookId", bookController.readOne);
app.put("/api/books/:bookId", bookController.update);
app.delete("/api/books/:bookId", bookController.deleteOne);

app.post("/api/books/:bookId/chapters", chapterController.create);
app.get("/api/books/:bookId/chapters", chapterController.readAll);
app.get("/api/books/:bookId/chapters/:chapterId", chapterController.readOne);
app.put("/api/books/:bookId/chapters/:chapterId", chapterController.update);
app.delete("/api/books/:bookId/chapters/:chapterId", chapterController.deleteOne);

app.use("/api/reading-progress/*", middlewares.authenticate);
app.get("/api/reading-progress", readingProgressController.getUserProgress);
app.get("/api/reading-progress/book/:bookId", readingProgressController.getUserProgressForBook);
app.post("/api/reading-progress/book/:bookId", readingProgressController.createOrUpdateProgress);
app.delete("/api/reading-progress/book/:bookId", readingProgressController.deleteProgress);

app.use("/api/todos/*", middlewares.authenticate);
app.post("/api/todos", todoController.create);
app.get("/api/todos", todoController.readAll);
app.get("/api/todos/:todoId", todoController.readOne);
app.put("/api/todos/:todoId", todoController.update);
app.delete("/api/todos/:todoId", todoController.deleteOne);

app.post("/api/todos/:todoId/tasks", taskController.create);
app.get("/api/todos/:todoId/tasks", taskController.readAll);
app.get("/api/todos/:todoId/tasks/:taskId", taskController.readOne);
app.put("/api/todos/:todoId/tasks/:taskId", taskController.update);
app.delete("/api/todos/:todoId/tasks/:taskId", taskController.deleteOne);

app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);

app.use("/api/secret", middlewares.authenticate);
app.get("/api/secret", (c) => {
  return c.json({ message: "This is a secret message!" });
});

app.get("/api/health", (c) => {
  return c.json({status: "ok"});
});

app.use("/api/profile", middlewares.authenticate)
app.get("/api/profile", (c) => {
  const user = c.get("user");
  return c.json({email: user.email});
})

app.get("/api/errors/:id", async (c) => {
  const id = c.req.param("id");
  if (id === "1") {
    await new Promise((res) => setTimeout(res, 10 * 60 * 1000));
  } else if (id === "2") {
    throw new Error("Oops, something failed on the server.");
  }

  return c.json({ message: `Hello ${id}` });
});

export default app;

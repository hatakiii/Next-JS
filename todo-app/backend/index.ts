import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";

const app: Application = express();
const port = 3000;

// const cors = require("cors");

let tasks = [
  { id: "10154", name: "Mop the floor" },
  { id: "15740", name: "Wipe out dust" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  // Anything
  res.send("Hello World! 123 ---ABC");
});

app.get("/tasks", (req: Request, res: Response) => {
  //fetch all tasks
  res.send(tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
  const id = nanoid();
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: "name is required" });
    return;
  }
  tasks.unshift({ id, name });
  res.status(201).send({ id });
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  //fetch all tasks
  console.log({ id });
  const newTasks = tasks.filter((task) => task.id !== id);
  tasks = newTasks;

  res.sendStatus(204); // No content
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { name } = req.body;
  //fetch all tasks
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].name = name;
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

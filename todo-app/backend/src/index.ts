import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";
import fs from "node:fs";

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

function getTasks() {
  if (!fs.existsSync("data.txt")) {
    fs.writeFileSync("data.txt", JSON.stringify([]));
    return [];
  }
  const data = fs.readFileSync("data.txt", "utf8");
  return JSON.parse(data);
}

function writeTasks(tasks: { id: string; name: string }[]) {
  fs.writeFile("data.txt", JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

app.get("/tasks", (req: Request, res: Response) => {
  const tasks = getTasks();
  res.send(tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
  const id = nanoid();
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: "name is required" });
    return;
  }
  const tasks = getTasks();

  tasks.unshift({ id, name });

  writeTasks(tasks);

  res.status(201).send({ id });
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  //fetch all tasks
  const tasks = getTasks();
  console.log({ id });
  const newTasks = tasks.filter((task: { id: string }) => task.id !== id);
  writeTasks(newTasks);
  // tasks = newTasks;

  res.sendStatus(204); // No content
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { name } = req.body;
  const tasks = getTasks();
  //fetch all tasks
  const index = tasks.findIndex((task: { id: string }) => task.id === id);
  tasks[index].name = name;
  writeTasks(tasks);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

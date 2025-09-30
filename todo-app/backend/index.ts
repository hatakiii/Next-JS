import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";

const app: Application = express();
const port = 3000;

// const cors = require("cors");

const tasks = [
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
  tasks.unshift({ id, name });
  res.status(201).send({ id });
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  //fetch all tasks
  res.send([]);
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  //fetch all tasks
  res.send([]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

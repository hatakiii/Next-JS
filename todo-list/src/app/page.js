"use client";

import { useState } from "react";
import { Addform, TodoRow } from "@/components";

export default function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Addform setTodos={setTodos} />
      {todos.map((todo, index) => (
        <TodoRow todo={todo} />
      ))}
    </div>
  );
}

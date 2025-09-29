"use client";

import { useEffect, useState } from "react";
import { Addform, TodoRow, FilterButtons } from "@/components";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "Active") {
      return !todo.isDone;
    }
    if (filterStatus === "Completed") {
      return todo.isDone;
    }
    return todo;
  });
  //
  return (
    <div>
      <Addform setTodos={setTodos} />
      {filteredTodos.map((todo, index) => (
        <TodoRow
          key={index}
          todo={todo}
          handleCheck={handleCheck}
          setTodos={setTodos}
        />
      ))}
      <FilterButtons setFilterStatus={setFilterStatus} />
    </div>
  );
}
